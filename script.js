// Menambahkan angka ke input di html
function appendValue(value) {
  const display = document.getElementById("display");
  const operators = ["+", "-", "*", "/", "."];

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
    addHistory(display.value, eval(expression));
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
  const body = document.body;
  const themeToggleIcon = document
    .getElementById("themeToggle")
    .querySelector("i");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
}

function addHistory(expression, result) {
  const history = document.getElementById("history");
  const list = document.createElement("li");
  list.textContent = `${expression} = ${result}`;
  history.prepend(list);
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const body = document.body;
  const themeToggleIcon = document
    .getElementById("themeToggle")
    .querySelector("i");

  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggleIcon.classList.remove("fa-moon");
    themeToggleIcon.classList.add("fa-sun");
  } else {
    themeToggleIcon.classList.remove("fa-sun");
    themeToggleIcon.classList.add("fa-moon");
  }
};
