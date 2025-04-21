function validateForm() {
    var nama = document.getElementById('nama').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMsg = "";

    if (nama.length <= 3) {
        errorMsg += "Nama harus lebih dari 3 karakter!<br>";
    }

    if (!email.includes('@') || !email.includes('.')) {
        errorMsg += "Email tidak valid!<br>";
    }

    if (password.length < 8) {
        errorMsg += "Password harus minimal 8 karakter!<br>";
    }

    if (errorMsg !== "") {
        document.getElementById('error').innerHTML = errorMsg;
        return false;
    }

    alert("Form berhasil dikirim!");
    return true;
}
