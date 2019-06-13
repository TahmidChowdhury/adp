// Handles addition, subtraction, multiplication, divison, and remainder
function taskHandler(operation, left, right)  {
  let solution = 0;
  switch(operation){
    case 'addition':
      solution = left + right;
      break;
    case 'subtraction':
      solution = left - right;
      break;
    case 'multiplication':
      solution = left * right;
      break;
    case 'division':
      solution = left / right;
      break;
    case 'remainder':
      solution = left % right;
      break;
    default:
      console.log(`Operation ${operation} does not exist, must be addition, subtraction, multiplication, division, or remainder`);
    }
  return solution;
}

module.exports = taskHandler;
