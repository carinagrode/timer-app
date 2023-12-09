const display = document.getElementById('display');

const button = document.querySelector('button');
button.addEventListener('click', startTimer);

let alarm = new Audio('yeah-super-gemacht.mp3');
let timerStarted = false;
let intervalId;

function startTimer() {

    navigator.wakeLock.request('screen').then(() =>  {
        
        if(!timerStarted) {

            let startTime = new Date().getTime();
            let twoMinutes = 1000 * 60 * 2;
            let endTime = startTime + twoMinutes;
            let waterBottleAir = document.createElement('div');

            button.remove();
            display.style.display = '';
            display.style.justifyContent = '';
            display.style.alignItems = 'flex-start';
            display.style.backgroundColor = 'blue';

            
            display.appendChild(waterBottleAir);
            waterBottleAir.style.width = '100vw';
            waterBottleAir.style.height = '100vh';
            waterBottleAir.style.backgroundColor = 'beige';

            intervalId = setInterval(function() {
                let timeLeft = endTime - new Date().getTime();

                if (timeLeft > 0) {
                    let seconds = timeLeft / 1000;
                    seconds = Math.round(seconds);
                    console.log(seconds);

                    let currentHeight = parseFloat(waterBottleAir.style.height);
                    waterBottleAir.style.height = `${currentHeight - (100 / 120)}vh`;
        
                } else {
                    console.log('Ready');
                    clearInterval(intervalId);
                    alarm.play();
                    display.style.backgroundImage = 'url("power-move-square.gif")';
                }

            }, 1000);
            timerStarted = true;

        }
    }).catch(error => {
        console.error('Sorry, hat nicht geklappt');
    });
}

