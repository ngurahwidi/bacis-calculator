// Menambahkan angka ke input di html
function appendValue(value) {
  const display = document.getElementById("display");
  const operators = ["+", "-", "*", "/"];

  const lastChar = display.value.slice(-1);
  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  display.value += value;
}

// Menghapus semua angka di input
function clearDisplay() {
  document.getElementById("display").value = "";
}

// Menghapus angka terakhir yang diinput
function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

// Menghitung hasil dari input ketika mengklik tombol "="
function calculate() {
  const display = document.getElementById("display");
  try {
    let expression = display.value.replace(/(\d+)%/g, "($1/100)");
    display.value = eval(expression);
  } catch (error) {
    alert("Input tidak valid");
    display.value = "";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
    "%",
  ];

  if (allowedKeys.includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});

function toggleTheme() {
  document.body.classList.toggle("dark");
}
