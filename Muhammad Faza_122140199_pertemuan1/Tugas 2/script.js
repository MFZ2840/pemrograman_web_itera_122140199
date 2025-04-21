function hitung(operator) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var hasil = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Masukkan angka yang valid!");
        return;
    }

    if (operator === '+') hasil = num1 + num2;
    if (operator === '-') hasil = num1 - num2;
    if (operator === '*') hasil = num1 * num2;
    if (operator === '/') hasil = num1 / num2;
    if (operator === '^') hasil = Math.pow(num1, num2);
    if (operator === '%') hasil = num1 % num2;

    document.getElementById('hasil').textContent = "Hasil: " + hasil;
}

function akar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    if (isNaN(num1)) {
        alert("Masukkan angka yang valid!");
        return;
    }
    document.getElementById('hasil').textContent = "Akar: " + Math.sqrt(num1);
}
