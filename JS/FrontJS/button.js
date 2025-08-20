const { json } = require("body-parser");

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
    sendToBackend();
}

async function testApi() {
    const api = await fetch("http://localhost:8080/test");
    const formattedApiResponse = await api.json().then(
        formattedApiResponse => {
            console.log(formattedApiResponse.message);
        }
    )
}

async function sendToBackend() {
   
}
