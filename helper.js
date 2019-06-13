const axios = require('axios'); // Using Axios to make http requests from node.js
const taskHandler = require('./taskHandler');
//will receive left, right, and operation from api and solves it
const getSolution = async (getTaskURL) => {
  try {
    const response = await axios.get(getTaskURL);
    const { data } = response;
    const {
      id,
      operation,
      left,
      right
    } = data;
    //console.log(data);
    const result = taskHandler(operation, left, right);

    return { id, result };
  } catch (error) {
    return console.log('Could not connect to the API');
  }
};

//will send id to submittask url
const postSolution = async (pURL, id, result) => {
  try {
    const res = await axios.post(pURL, { id, result });
    if (res.status === 200){
      console.log(`Successful post request;
        ID: ${id}
        Solution: ${result}`);
      console.log("-----------------------------------");
    }
    if (res.status === 400){
      console.log('Incorrect value in solution; no ID specified; value is invalid');
    }
    else if (res.status === 500){
      console.log('ID cannot be found');
    }
    return res.data;
  } catch (error) {
    return console.error(`Error submitting and/or completing task
           id: ${id} solution: ${result}`);  }
};


module.exports = { postSolution, getSolution };
