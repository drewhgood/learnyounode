var fs = require('fs');

var path = process.argv[2];
var extension = process.argv[3];

fs.readdir(path, function callback (err, data) { 
  var newArr = data;
  var filtered = newArr.filter(matchExtension);
  show(filtered);
});

var show = function(data){
  var len = data.length;
  for(var i = 0 ; i < len ; i++){
      console.log(data[i]);
  };
};

function matchExtension(value) {
  var fileExt = value.split('.')[1];
  return fileExt === extension;
};





















