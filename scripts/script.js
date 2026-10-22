let btn = document.querySelector(".contactUs");
let txt = document.querySelector(".contactInfo");
let dark = document.querySelector(".darkMode");
let header = document.querySelector("header");
let main = document.querySelector(".images");
let footer = document.querySelector("footer");
let desc = document.querySelector(".mainDescription")
let counter = 0;
let form = document.querySelector(".formDiv");
let logInBtn = document.querySelector(".loginBtn");
let logOutBtn = document.querySelector(".logoutBtn");
let userMail = document.getElementById("userMail");
let loginForm = document.querySelector("#loginForm");
let notFound = document.getElementById("notFound");
let savedMail = "1@gmail.com";
let savedPassword = "pass";
btn.addEventListener("click", function(){
    if(txt.style.display == "none"){
        txt.style.display = "block";
        btn.style.border = "3px solid black";
        txt.style.fontWeight = "700";
    }else{
        txt.style.display = "none";
        btn.style.border = "none";
        txt.style.fontWeight = "200";
    }
});
dark.addEventListener("click", function(){
    counter++;
    if(counter % 2){
        footer.style.backgroundColor = "black";
        header.style.backgroundColor = "black";
        main.style.backgroundColor = "gray";
        desc.style.backgroundColor = "rgba(128, 128, 128, 0.8)";
        dark.innerHTML = "Light Mode";
    }else{
        footer.style.backgroundColor = "rgb(0 0 0 / 0.61)";
        header.style.backgroundColor = "pink";
        desc.style.backgroundColor = "#ffc0cbd3";
        main.style.backgroundColor = "#ffc0cb9a";
        dark.innerHTML = "Dark Mode";
    }
});
logInBtn.addEventListener("click", function(){
    if(form.style.display == "none"){
        form.style.display = "block";
    }else{
        form.style.display = "none";
    }
});
loginForm.addEventListener("submit", function(el){
    el.preventDefault();
    let mail = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    if(mail === savedMail && pass === savedPassword){
        form.style.display = "none";
        userMail.innerHTML = mail;
        userMail.style.display = "block";
        logInBtn.style.display = "none";
        logOutBtn.style.display = "block";
    }else if(mail === savedMail && pass === savedPassword){
        form.style.display = "none";
        userMail.innerHTML = mail;
        userMail.style.display = "block";
        logInBtn.style.display = "none";
        logOutBtn.style.display = "block";
    }else{
        notFound.style.display = "block";
        notFound.style.color = "red";
        notFound.innerHTML = "User Not Found!";
    }
});
logOutBtn.addEventListener("click", function(){
    logInBtn.style.display = "block";
    userMail.style.display = "none";
    userMail.innerHTML = "";
    logOutBtn.style.display = "none";
});
