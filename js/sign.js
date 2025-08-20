let password = document.querySelector("#password")
let email = document.querySelector("#email")
let btn = document.querySelector("#btn")
let getemail = localStorage.getItem("email")
let getpassword = localStorage.getItem("password")
let reg = document.querySelector("#reg")


btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (getemail == null && getpassword == null) {
        alert("please sign up first")
        reg.style.transform = "scale(1.1)"
        reg.style.color = "red"
        reg.style.transition = "transform 0.3s ease"
        setTimeout(() => {
            reg.style.transform = "scale(1)"
            reg.style.color = "black"
        }, 1500)
    }
    else if (getemail.trim() === email.value.trim() && getpassword.trim ()=== password.value.trim()) {
        
        setTimeout(() => {
            window.location = "index.html"
        }, 100)
        
    }
    else{
        if(email.value == "" || password.value == "") {
            alert("Please fill data")
        }
        else if (getemail !== email.value || getpassword !== password.value) {
            alert("Please enter correct email and password")
        }
    }
})
