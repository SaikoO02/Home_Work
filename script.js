function generateNumber() {
    document.getElementById('result').textContent = Math.floor(Math.random() * 100) + 1;
}

const btn = document.querySelector('button');

btn.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    btn.style.left = Math.random() * maxX + 'px';
    btn.style.top  = Math.random() * maxY + 'px';
});
