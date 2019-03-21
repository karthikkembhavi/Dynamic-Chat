var fs = require('fs');


fs.readFile('./data.json', 'utf-8', function(err,data){
    var data = JSON.parse(data);
    console.log(data.name);
})