const toggleBtn = document.getElementById('toggleBtn');
let darkMode = false;

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkMode = !darkMode;
    toggleBtn.textContent = darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
