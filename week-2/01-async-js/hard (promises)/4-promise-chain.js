/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function delayPromise(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

function wait1(t) {
    return delayPromise(t);
}

function wait2(t) {
    return delayPromise(t);
}

function wait3(t) {
    return delayPromise(t);
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    
    return wait1(t1).then(function(){
        return wait2(t2)
    })
    .then(function(){
        return wait3(t3);
    })
    .then(function(){
        const totalTime = Date.now() - startTime;
        return totalTime;

    });
}

module.exports = calculateTime;

