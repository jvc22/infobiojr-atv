let displayValue = '';

function appendValue(value) {
    displayValue += value;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        if (!Number.isFinite(result)) {
            throw new Error('Não é possível dividir por 0 (zero).');
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        if (error instanceof SyntaxError) {
            alert('Verifique os campos inseridos e tente novamente.');
        } else {
            alert(error.message);
        }
    }
}