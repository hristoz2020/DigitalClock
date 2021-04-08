
const container = document.querySelector('.container');
const h1 = document.querySelector('.container h1');

const clock = () => {

    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();

    if (hours <= 9) {
        hours = '0' + hours;
    } 
    if (minutes <= 9) {
        minutes = '0' + minutes;
    } 
    if (secondes <= 9) {
        secondes = '0' + secondes;
    }

    h1.innerHTML = hours + ':' + minutes + ':' + secondes;

}

setInterval(clock, 1000);