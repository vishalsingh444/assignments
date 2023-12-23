const { isUtf8 } = require('buffer');
const fs = require('fs');

function readFile(callback){
    fs.readFile("text.txt","utf-8",(err,data)=>{
        callback(data);
    })
}

function writeFile(data){
    let newData = data.replace(/\s+/g,' ');
    fs.writeFile("text.txt",newData,(err)=>{
        if(err){
            console.log("Error writing to file: "+ err);
        }else{
            console.log("File written successfully!");
        }
    })
}

readFile(writeFile);