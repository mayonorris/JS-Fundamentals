/*Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer */

let argPassed = Number(process.argv[2]);
if (!Number.isInteger(argPassed)){
	console.log('Missing number of occurrences');
} else {
	let i = 1;
	while(i <= argPassed){
		console.log('C is fun');
		i++;
	}
}
