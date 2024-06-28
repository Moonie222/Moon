document.addEventListener('DOMContentLoaded', (event) => {
    const moon = document.getElementById('moon');
    const clickCountDisplay = document.getElementById('clickCount');

    let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    clickCountDisplay.textContent = clickCount;

    moon.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        localStorage.setItem('clickCount', clickCount);
    });
});
