let btn = document.querySelector(".contactUs");
let txt = document.querySelector(".contactInfo");
let dark = document.querySelector(".darkMode");
let main = document.querySelector(".images");
let footer = document.querySelector("footer")
let counter = 0;
let form = document.querySelector(".formDiv");
let logInBtn = document.querySelector(".loginBtn");
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
        main.style.backgroundColor = "gray";
        dark.innerHTML = "Light Mode";
    }else{
        footer.style.backgroundColor = "rgb(0 0 0 / 0.61)";
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