var fs = require('fs');

var path = process.argv[2];

var input =  fs.readFileSync(path).toString();

var newArr = input.split('\n');

var answer = newArr.length - 1;

console.log(answer);
