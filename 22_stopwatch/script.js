let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let laps = [];

function startStopwatch()
{
    timer = setInterval(updateStopwatch, 1000);
}

function stopStopwatch()
{
    clearInterval(timer);
}

function resetStopwatch()
{
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    laps = [];
    updateDisplay();
    updateLaps();
}

function lapStopwatch(){
    const lapTime = {hours, minutes, seconds};
    laps.unshift(lapTime);
    updateLaps();
}

function updateStopwatch()
{
    seconds++;
    if (seconds == 60)
    {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60)
    {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    const formattedTime = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('display').textContent = formattedTime;
  }

function updateLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = '';
  
    laps.forEach((lap, index) => {
      const lapItem = document.createElement('li');
      lapItem.textContent = `Lap ${index + 1}: ${formatTime(lap.hours)}:${formatTime(lap.minutes)}:${formatTime(lap.seconds)}`;
      lapsList.appendChild(lapItem);
    });
  }

  function formatTime(value) {
    return value < 10 ? '0' + value : value;
  }