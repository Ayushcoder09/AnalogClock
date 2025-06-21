function updateClock() {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hr = now.getHours();

    const secDeg = sec * 6; // 360/60
    const minDeg = min * 6 + sec * 0.1; // 360/60 + smooth
    const hrDeg = ((hr % 12) * 30) + (min * 0.5); // 360/12 + smooth

    document.getElementById('hour').style.transform = `translate(-50%, 0) rotate(${hrDeg}deg)`;
    document.getElementById('minute').style.transform = `translate(-50%, 0) rotate(${minDeg}deg)`;
    document.getElementById('second').style.transform = `translate(-50%, 0) rotate(${secDeg}deg)`;
}

window.addEventListener('DOMContentLoaded', () => {
    const clock = document.getElementById('clockContainer');
    // Add numbers
    for (let n = 1; n <= 12; n++) {
        const num = document.createElement('div');
        num.className = 'clock-number';
        num.innerText = n;
        const angle = (n - 3) * 30 * Math.PI / 180;
        const radius = 125; 
        const numSize = 28; 
        num.style.position = 'absolute';
        num.style.left = 160 + radius * Math.cos(angle) - numSize / 2 + 'px';
        num.style.top = 160 + radius * Math.sin(angle) - numSize / 2 + 'px';
        num.style.width = numSize + 'px';
        num.style.height = numSize + 'px';
        num.style.display = 'flex';
        num.style.justifyContent = 'center';
        num.style.alignItems = 'center';
        num.style.color = '#fff';
        num.style.fontSize = '1.4em';
        num.style.fontWeight = '600';
        num.style.fontFamily = "'Segoe UI', Arial, sans-serif";
        num.style.userSelect = 'none';
        clock.appendChild(num);
    }

    for (let i = 0; i < 60; i++) {
        if (i % 5 === 0) {
            const tick = document.createElement('div');
            tick.className = 'clock-tick';
            const angle = i * 6;
            tick.style.position = 'absolute';
            tick.style.width = '6px';
            tick.style.height = '20px';
            tick.style.background = '#fff';
            tick.style.left = '159px';
            tick.style.top = '0px';
            tick.style.transform = `rotate(${angle}deg)`;
            tick.style.transformOrigin = 'center 160px';
            clock.appendChild(tick);
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
});