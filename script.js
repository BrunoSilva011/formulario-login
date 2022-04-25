let email = document.getElementById("email")
email.addEventListener ("focus", ()=> {
    email.style.borderColor = "rgb(143, 8, 143)"
})
email.addEventListener("blur", ()=> {
    email.style.borderColor = "#ccc"
})

let password = document.getElementById("password") 
password.addEventListener("focus", ()=> {
    password.style.borderColor = "rgb(143, 8, 143)"
})
password.addEventListener("blur", ()=> {
    password.style.borderColor = "#ccc"
})