document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is loaded");
});

function login() {
    const userTextField = document.getElementById("User");
    const passTextField = document.getElementById("Pass");
    //const loginButton = document.getElementById("Login");
    console.log("Logging in...");
    const userValue = userTextField.value;
    const passValue = passTextField.value;
}