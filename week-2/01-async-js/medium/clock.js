function startClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours>=12? "pm" : "am";

    hours = hours%12;
    hours = hours===0? 12:hours;

    minutes = minutes < 10 ? "0" + minutes: minutes;
    seconds = seconds < 10 ? "0" + seconds: seconds

    const currentTime = `${hours}:${minutes}:${seconds} ${ampm}`
    console.log(currentTime);
    setTimeout(startClock,1000);
}
startClock();