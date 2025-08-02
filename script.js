// Countdown (reset 1 Januari 2026 00:00 UTC)
const target = new Date("2026-01-01T00:00:00Z").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
        timer.textContent = "Telah Direset!";
        return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();