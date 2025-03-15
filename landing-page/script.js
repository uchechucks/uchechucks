// Countdown Timer Script
function startCountdown(durationInSeconds) {
  let timer = durationInSeconds;
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function updateTimer() {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');

    if (timer > 0) {
      timer--;
      setTimeout(updateTimer, 1000);
    }
  }

  updateTimer();
}

// Start countdown (e.g., 2 hours)
startCountdown(24 * 3600);



function updateLiveCount() {
  const viewerElement = document.getElementById('live-count');

  // Retrieve stored viewers or initialize if not set
  let viewers = localStorage.getItem('liveViewers');
  viewers = viewers ? parseInt(viewers, 10) : Math.floor(Math.random() * 1000) + 1000;

  viewerElement.textContent = viewers.toLocaleString();

  function changeViewers() {
      const change = Math.floor(Math.random() * 10) * (Math.random() < 0.5 ? 1 : -1);
      viewers = Math.max(0, viewers + change); // Prevent negative count

      // Update UI and save new count
      viewerElement.textContent = viewers.toLocaleString();
      localStorage.setItem('liveViewers', viewers);
  }

  setInterval(changeViewers, 1000); // Update every second
}

updateLiveCount();







/*

  function startCountdown(durationInSeconds) {
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  // Check if an end time already exists in localStorage
  let endTime = localStorage.getItem("countdownEndTime");

  if (!endTime) {
    // If not stored, set the end time (current time + duration)
    endTime = Date.now() + durationInSeconds * 1000;
    localStorage.setItem("countdownEndTime", endTime);
  } else {
    // Convert stored value to a number
    endTime = parseInt(endTime, 10);
  }

  function updateTimer() {
    const currentTime = Date.now();
    let remainingTime = Math.max(0, Math.floor((endTime - currentTime) / 1000));

    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    if (remainingTime > 0) {
      setTimeout(updateTimer, 1000);
    } else {
      localStorage.removeItem("countdownEndTime"); // Reset when expired
    }
  }

  updateTimer();
}

// Start countdown (e.g., 2 hours)
startCountdown(24 * 3600);



*/