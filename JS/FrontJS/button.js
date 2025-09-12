document.addEventListener("DOMContentLoaded", function() { // Tells me when DOM is loaded
    console.log("DOM is loaded");
});

// Initialising DOM variables
const userTextField = document.getElementById("User");
const passTextField = document.getElementById("Pass");
const loginButton = document.getElementById("Login");
const localHostModeButton = document.getElementById("localmode");
const loginStatusText = document.getElementById("status");
const localHostModeStatusText = document.getElementById("localmodestatus");
const localURIAddress = document.getElementById("localuri");
loginButton.addEventListener("click", login);
localHostModeButton.addEventListener("click", enableDevMode);
// Initialising global variables
const URI = 'https://nitroandhaloprojectsbackendapi.dpdns.org/'; // <-- This is the endpoint we host for you
const localURI = 'http://127.0.0.1:5050/'; // <-- here is where you edit the local host mode endpoint
let devMode = false;

function login() { // When login button is clicked these functions are triggered
    console.log("Logging in...");
    testGET();
    testPOST();
    sendToBackend();
}
let devmodeonoroff = false;
function enableDevMode() { // When localhostmode button is pressed this is fired
    if (devmodeonoroff = !devmodeonoroff) { // Acts as an on/off switch
        console.log("local host mode: ON");
        devmodeonoroff = true;
        devMode = true;
        localHostModeStatusText.innerHTML = "Local host mode: ON ✅";
        localURIAddress.innerHTML = `The URI address is: ${localURI}`;
    } else {
        console.log("local host mode: OFF");
        devmodeonoroff = false;
        devMode = false;
        localHostModeStatusText.innerHTML= "Local host mode: OFF ❌";
        localURIAddress.innerHTML = `The URI address is: ${URI}`;
    }
}

async function testGET() { // Sends a simple GET request to the Node.js backend
    try {
        let URIs;
        if (devMode == true) {URIs = localURI} else if (devMode == false) {URIs = URI} else {URIs = URI};
        console.log(`Selected URI is: ${URIs}`);
        const api = await fetch(URIs + 'test', { method: 'GET' });
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
        let URIs;
        if (devMode == true) {URIs = localURI} else if (devMode == false) {URIs = URI} else {URIs = URI};
        console.log(`Selected URI is: ${URIs}`);
        loginStatusText.innerHTML = "Logging you in... 🧾"
        const response = await fetch(URIs + 'testpost', {
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
