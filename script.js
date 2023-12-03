const display = document.getElementById('display');

window.addEventListener('load', displayTimer);



function displayTimer() {
    const timerDisplay = document.createElement('p');
    timerDisplay.textContent = '2:00';
    display.appendChild(timerDisplay);

    const button = document.createElement('button');
    button.textContent = 'Start';
    display.appendChild(button);

    button.addEventListener('click', startTimer);

    let alarm = new Audio('yeah-super-gemacht.mp3');
    let timerStarted = false;
    let intervalId;

    function startTimer() {

        if(!timerStarted) {
            let startTime = new Date().getTime();
            let twoMinutes = 1000 * 60 * 2;
            let endTime = startTime + twoMinutes;

            timerDisplay.remove();
            button.remove();
            
            display.style.backgroundColor = 'blue';

            let waterBottleAir = document.createElement('div');
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
                    display.style.backgroundColor = 'red';
                }
    
            }, 1000);
            timerStarted = true;

        }
    }

    
}

