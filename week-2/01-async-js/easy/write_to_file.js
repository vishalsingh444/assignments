const fs = require('fs');

function writeDataInFile(){
    let content = "Code your dreams into reality; every line of code is a step closer to the extraordinary."
    fs.writeFile("a.txt",content,function(err){
        if(err){
            console.log("Error writing to file: "+ err);
        }else{
            console.log("File written successfully!");
        }
    })
    
}

writeDataInFile();
let sum = 0;
for(let i=0;i<10000000000;i++){
    sum +=i;
}
console.log(sum);