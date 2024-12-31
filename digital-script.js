function updateDigitalClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros
    const formatTime = (time) => (time < 10 ? `0${time}` : time);

    // Update time in DOM
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("ampm").textContent = ampm;
}

// Update every second
setInterval(updateDigitalClock, 1000);

// Initialize clock
updateDigitalClock();
