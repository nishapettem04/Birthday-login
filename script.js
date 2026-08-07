function login() {
    let username = document.getElementById("user").value;
    let password = document.getElementById("pass").value;

    if (username === "tharunn" && password === "tharun@1304") {
        window.location.href = "image.html";
    } else {
        document.getElementById("msg").innerHTML =
            "Wrong Username or Password";
    }
}