var fs = require('fs');

var data = { 
    name : "abc" 
}

fs.writeFile('jsonDemo.json',JSON.stringify(data), (err)=>{
    console.log("Write completed", err);
});