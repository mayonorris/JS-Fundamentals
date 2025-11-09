/* A script that computes and prints a factorial*/
function factorial(n){
	if (!Number.isInteger(n) || n === 0){
        return (1);
	} else {
        return (n * factorial(n-1));
	}
}
let n = Number(process.argv[2]);
result = factorial(n);
console.log(result);
