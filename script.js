function checkPass(){
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("PasswordToConfirm").value;
    let passText = document.getElementById("passwordError");

    if (password !== passwordConfirm) {
        passText.textContent = "Password does not match. Please try again";
        passText.style.color = "red"; 
        document.getElementById("password").style.borderColor = "red"; 
        document.getElementById("PasswordToConfirm").style.borderColor = "red";
    } else {
        passText.textContent = "";
        document.getElementById("password").style.borderColor = ""; 
        document.getElementById("PasswordToConfirm").style.borderColor = "";
    }
}