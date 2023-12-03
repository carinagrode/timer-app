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

    let timerStarted = false;
    let intervalId;

    function startTimer() {

        if(!timerStarted) {
            let startTime = new Date().getTime();
            let twoMinutes = 1000 * 60 * 2;
            let endTime = startTime + twoMinutes;

            intervalId = setInterval(function() {
                let timeLeft = endTime - new Date().getTime();
    
                if (timeLeft > 0) {
                    let seconds = timeLeft / 1000;
                    seconds = Math.round(seconds);
                    console.log(seconds);

                    let box = document.createElement('div');
                    display.appendChild(box);
                    box.style.width = '40px';
                    box.style.height = '40px';
                    box.style.backgroundColor = 'pink';
        
                } else {
                    console.log('Ready');
                    clearInterval(intervalId);
                }
    
            }, 1000);
            timerStarted = true;

        }
    }

    
}

