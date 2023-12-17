let count = 0;

function startCounter(){
    console.log(count);
    count++;
    setTimeout(startCounter,1000);
}

startCounter();