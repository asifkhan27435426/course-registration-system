function login() {
    let id = document.getElementById("studentId").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("message");
    if (id === "12345" && pass === "12345") {
        msg.style.color = "green";
        msg.innerText = "Login Successful! Welcome Student";
        window.location.href = "dashboard.html";
    } else {
        msg.style.color = "red";
        msg.innerText = "Wrong ID or Password!";
    }
}