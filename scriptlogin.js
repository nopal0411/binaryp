document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "ari" && password === "123") {
        // Redirect to a success page or perform other actions
        window.location.href = "success.html";
    } else {
        document.getElementById("error-message").textContent = "Username atau password salah. Silakan coba lagi.";
    }
});
