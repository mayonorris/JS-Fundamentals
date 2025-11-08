/* Write a script that prints My number: <first argument converted in integerif the first argument can be converted to an integer*/

let argPassed = Number(process.argv[2]);
if (!Number.isInteger(argPassed)){
	console.log("Not a number");
}else {
	console.log(`My number: ${argPassed}`);
}
