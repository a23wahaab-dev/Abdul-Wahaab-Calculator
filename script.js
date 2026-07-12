let display = document.getElementById("display");

function press(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value.replace(/\s/g, "");

    // ===== Secret Codes =====
    if (expression === "2+3") {
        display.value = "Abdul Wahaab👑";
        return;
    }

    if (expression === "2+8") {
        display.value = "Mama❤️";
        return;
    }

    if (expression === "2+5") {
        display.value = "Wasil😝";
        return;
    }

    if (expression === "0+4") {
        display.value = "Khala🥰";
        return;
    }

    if (expression === "786+786") {
        display.value = "Bismillah ❤️";
        return;
    }

    if (expression === "7+7") {
        display.value = "James Bond 😎";
        return;
    }

    if (expression === "1+1") {
        display.value = "I Love You ❤️";
        return;
    }

    if (expression === "9+9") {
        display.value = "Welcome Abdul Wahaab 👑";
        return;
    }

    // ===== Normal Calculator =====
    try {
        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        press(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});