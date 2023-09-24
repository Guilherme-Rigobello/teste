document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const password = document.getElementById("password").value;

        if ( password === "250367" || password === "25/03/67") {
            
        } else {
            alert("Login falhou. Tente novamente.");
        }
    });
});