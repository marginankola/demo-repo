document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.value = '';
            } else if (value === '=') {
                if (currentInput && previousInput) {
                    currentInput = eval(previousInput + operator + currentInput);
                    display.value = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
