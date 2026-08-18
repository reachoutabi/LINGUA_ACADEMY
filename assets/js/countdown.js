/**
 * Lingua Academy - Countdown Timer Module (Batch Start Ticker & Coming Soon)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Batch Start Countdown Ticker
    const tickerTimerEl = document.querySelector('#batchTickerCountdown');
    if (tickerTimerEl) {
        // Set target 3 days from today
        const targetDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                tickerTimerEl.innerHTML = "New Batch Started Today!";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            tickerTimerEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    // 2. Full Page Countdown (Coming Soon Page)
    const csDays = document.querySelector('#csDays');
    const csHours = document.querySelector('#csHours');
    const csMinutes = document.querySelector('#csMinutes');
    const csSeconds = document.querySelector('#csSeconds');

    if (csDays && csHours && csMinutes && csSeconds) {
        const targetDate = new Date().getTime() + (14 * 24 * 60 * 60 * 1000); // 14 days launch

        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) return;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            csDays.innerText = days < 10 ? '0' + days : days;
            csHours.innerText = hours < 10 ? '0' + hours : hours;
            csMinutes.innerText = minutes < 10 ? '0' + minutes : minutes;
            csSeconds.innerText = seconds < 10 ? '0' + seconds : seconds;
        }, 1000);
    }
});
