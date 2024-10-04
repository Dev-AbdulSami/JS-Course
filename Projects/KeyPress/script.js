const keyPressDisplay = document.getElementById('keyPressDisplay');

document.addEventListener('keydown', (event) => {
    keyPressDisplay.textContent = event.key;
});
