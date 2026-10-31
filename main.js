const PASSWORD = 'love';   // change the secret word here

const gate = document.getElementById('gate');
const form = document.getElementById('gateForm');
const input = document.getElementById('pass');
const err = document.getElementById('err');

// Floating hearts
function hearts(count = 26) {
  const icons = ['\u2764\uFE0F', '\uD83D\uDC96', '\u2728', '\uD83C\uDF82'];
  for (let i = 0; i < count; i++) {
    const h = document.createElement('div');
    h.className = 'heart';
    h.textContent = icons[i % icons.length];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = 18 + Math.random() * 22 + 'px';
    h.style.animationDuration = 3 + Math.random() * 3 + 's';
    h.style.animationDelay = Math.random() * 0.8 + 's';
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }
}

// Password check
form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim().toLowerCase() === PASSWORD) {
    err.textContent = '';
    gate.classList.add('hide');
    document.body.classList.remove('locked');
    window.scrollTo(0, 0);
    hearts(34);
  } else {
    err.textContent = 'Not quite, try again \uD83D\uDC94';
    form.classList.remove('shake');
    void form.offsetWidth;          // restart the animation
    form.classList.add('shake');
    input.select();
  }
});

// Tap the final banner for more hearts
document.getElementById('final').addEventListener('click', () => hearts());

// Missing photo? Show a soft pink block instead of a broken icon
document.querySelectorAll('.photos img').forEach(img => {
  img.addEventListener('error', () => { img.removeAttribute('src'); img.alt = ''; });
});