// Simple script to update the time, adding a dynamic element to the signage
function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    if (!timeDisplay) return;
    
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    
    timeDisplay.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call
updateTime();

// Update every second
setInterval(updateTime, 1000);