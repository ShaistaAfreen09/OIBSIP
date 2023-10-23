document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = "jack";
    const password = "pass123";
  
    const enteredUsername = document.getElementById("username").value;
    const enteredPassword = document.getElementById("password").value;
  
    if (enteredUsername === username && enteredPassword === password) {
        
        window.location.href = "welcome.html";
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
