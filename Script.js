let isOn = true;

function append(val) {
    if (isOn) {
        document.getElementById('res').value += val;
    }
}

function calculate() {
    if (isOn) {
        let exp = document.getElementById('res').value;
        try {
            document.getElementById('res').value = eval(exp);
        } catch {
            document.getElementById('res').value = "Error";
        }
    }
}

function clearAll() {
    if (isOn) {
        document.getElementById('res').value = "";
    }
}

function backspace() {
    if (isOn) {
        let res = document.getElementById('res');
        res.value = res.value.slice(0, -1);
    }
}

// ----------- POWER BUTTONS -----------

function powerOn() {
    isOn = true;
    document.getElementById("res").value = "";

    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        btn.disabled = false;
    });
}

function powerOff() {
    isOn = false;
    document.getElementById("res").value = "";

    let buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
        if (!btn.classList.contains("power-on") && !btn.classList.contains("power-off")) {
            btn.disabled = true;
        }
    });
}

// ----------- Keyboard Support -----------

document.addEventListener('keydown', function(event) {
    if (!isOn) return;

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
