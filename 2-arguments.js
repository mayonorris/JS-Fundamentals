// 2-arguments.js

// compute how many user args were passed
const argsCount = process.argv.length - 2;

//print the required message using console.log
if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
