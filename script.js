/* ========== COUNTDOWN ========== */
const target = new Date("2026-01-01T00:00:00Z").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) {
    timer.textContent = "Telah Direset!";
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  timer.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

/* ========== PARTICLES ========== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let W = (canvas.width = innerWidth);
let H = (canvas.height = innerHeight);

const particles = [];
const maxParticles = 80;

class Particle {
  constructor() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,255,255,${this.opacity})`;
    ctx.fill();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > W) this.vx *= -1;
    if (this.y < 0 || this.y > H) this.vy *= -1;
    this.draw();
  }
}

function initParticles() {
  for (let i = 0; i < maxParticles; i++) particles.push(new Particle());
}
function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => p.update());
}
window.addEventListener("resize", () => {
  W = canvas.width = innerWidth;
  H = canvas.height = innerHeight;
});
initParticles();
animateParticles();

/* ========== AOS ========== */
AOS.init({ duration: 800, once: true });
