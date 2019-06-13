const { postSolution, getSolution } = require('./helper');
const links = require('./links.json');

//Every 1000ms/1s api will be called
setInterval(() => {
  getSolution(links.getTask).then((data) => {
    postSolution(links.submitTask, data.id, data.result);
  });
}, 1000);
