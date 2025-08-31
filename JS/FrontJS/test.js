// THIS SCRIPT IS PURELY USED TO TEST API's VIA NODE.JS
async function testApi() {
    const api = await fetch("http://localhost:8080/test", { method: 'GET' });
    const data = await api.json()
    console.log(await data);
};

async function testPOST() {
    const response = await fetch("http://localhost:8080/testpost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: "Hello!"
        })
    });
    console.log(await response.json());
};

testPOST();