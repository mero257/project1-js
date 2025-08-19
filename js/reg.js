let username1=document.querySelector("#name1")
let username2=document.querySelector("#name2")
let password=document.querySelector("#password")
let email=document.querySelector("#email")
let btn=document.querySelector("#btn")

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(username1.value==""||username2.value==""||password.value==""||email.value=="")
    {
        alert("please fill data")
    }
    else{
        localStorage.setItem("firstname",username1.value)
        localStorage.setItem("secname",username2.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("email",email.value)
        setTimeout(()=>{
            window.location="sign.html"
        },1500)
    }
})