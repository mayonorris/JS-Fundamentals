// 3-value_argument.js

// compute how many user args were passed
const argsCount = process.argv.length - 2;

//print the required message using console.log
if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log(process.argv[2]);
}
