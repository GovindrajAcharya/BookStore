let submitbutton = document.getElementById("submit");

submitbutton.addEventListener('click', (e) => {

    let a1 = document.getElementById("email_input")
    let a2 = document.getElementById("password_input")

    if (a1.value == "email@gmail.com" && a2.value == "abc@123") {
        alert("Hello World")
    }

    else {
        alert("invalid password")
    }
    e.preventDefault()

});