document.addEventListener("DOMContentLoaded", function() { // Tells me when DOM is loaded
    console.log("DOM is loaded");
});

// Initialising DOM variables
const userTextField = document.getElementById("User");
const passTextField = document.getElementById("Pass");
const loginButton = document.getElementById("Login");
const loginStatusText = document.getElementById("status");
loginButton.addEventListener("click", login);

function login() { // When button is clicked these functions are triggered
    console.log("Logging in...");
    testGET();
    testPOST();
    sendToBackend();
}

async function testGET() { // Sends a simple GET request to the Node.js backend
    try {
        const api = await fetch("http://localhost:8080/test", { method: 'GET' });
        const data = await api.json()
        console.log(await data.message);
    } catch (e) {
        console.log(e + "\n");
        console.log("Have you started hosting the backend?\n");
    }
};

async function testPOST() { // Sends a POST request to the backend for it to be repeated back
    const userString = `User: ${userTextField.value}\n Pass: ${passTextField.value}`
    try{
        loginStatusText.innerHTML = "Logging you in... 🧾"
        const response = await fetch("http://localhost:8080/testpost", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: userString
            })
        });
        const data = await response.json();
        console.log(data.body.message);
        if (data.body) {
            loginStatusText.innerHTML = "Logged in! 📩"
        } else {
            loginStatusText.innerHTML = "Error while logging in 📲"
        }
    } catch (e) {
        loginStatusText.innerHTML = "Error while logging in 📲"
        console.log(e);
        console.log("Error while trying to do a TEST POST REQUEST");
        console.log("Have you started hosting the backend?\n");
    }
}

async function sendToBackend() { // This function will be used to send the data to the backend for verification
   
};
