let counter = 0;
const counterValue = document.getElementById('counterValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counterValue.textContent = counter;
    }
});
