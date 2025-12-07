function append(val) {
    document.getElementById('res').value += val;
}

function calculate() {
    let exp = document.getElementById('res').value;
    try {
        document.getElementById('res').value = eval(exp);
    } catch {
        document.getElementById('res').value = "Error";
    }
}

function clearAll() {
    document.getElementById('res').value = "";
}

function backspace() {
    let res = document.getElementById('res');
    res.value = res.value.slice(0, -1);
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
    let key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key.toLowerCase() === 'c') {
        clearAll();
    }
});
