const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.dataset.value;
        const action = btn.dataset.action;

        if (action === 'clear') {
            display.value = '';
        } else if (action === 'calculate') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error';
        }
        } else {
        display.value += value;
        }
    });
});
