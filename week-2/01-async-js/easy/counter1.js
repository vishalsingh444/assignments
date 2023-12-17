let count = 0;

function updateCounter(){
    console.log(count);
    count++;
}

let intervalId = setInterval(updateCounter,1000);

