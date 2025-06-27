// Menambahkan angka ke input di html
function appendValue(value) {
  document.getElementById("display").value += value;
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
    display.value = eval(display.value);
  } catch (error) {
    alert("Input tidak valid");
    display.value = "";
  }
}
