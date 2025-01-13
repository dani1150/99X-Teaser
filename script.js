const overlay = document.querySelector('.overlay');

document.addEventListener('mousemove', (e) => {
  overlay.style.maskImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 1) 250px)`;
  overlay.style.webkitMaskImage = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 1) 350px)`;
});
