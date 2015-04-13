var fs = require('fs');

var path = process.argv[2];



fs.readFile(path, 'utf8', function callback (err, data) { 
  var callbackData = data; 
  show(callbackData);
});

var show = function(data){
  var newArr = data.split('\n');
  var answer = newArr.length - 1;
  console.log(answer);
};


