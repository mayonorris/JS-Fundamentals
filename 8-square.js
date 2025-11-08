// 8-square.js
const n = parseInt(process.argv[2], 10);

if (Number.isNaN(n)) {
  console.log('Missing size');
} else if (n < 0){
	console.log();
} else {
  const row = 'X'.repeat(n);        // one line of the square
  for (let i = 0; i < n; i++) {
    console.log(row);
  }
}
