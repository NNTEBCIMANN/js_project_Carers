let btn = document.querySelector(".contactUs");         // Contact Info
let txt = document.querySelector(".contactInfo");       // On Btn Click


let dark = document.querySelector(".darkMode");         // \/
let header = document.querySelector("header");          // Dark 
let main = document.querySelector(".images");           // And
let footer = document.querySelector("footer");          // Light
let desc = document.querySelector(".mainDescription")   // Modes
let counter = 0;                                        // /\


let form = document.querySelector(".formDiv");          // \/
let logInBtn = document.querySelector(".loginBtn");     // \/
let logOutBtn = document.querySelector(".logoutBtn");   // \/
let userMail = document.getElementById("userMail");     // Everything
let loginForm = document.querySelector("#loginForm");   // For
let notFound = document.getElementById("notFound");     // Register,
let regBtn = document.querySelector(".regBtn");         // LogIn, And
let regDiv = document.querySelector(".regDiv");         // LogOut
let regForm = document.getElementById("regForm");       // /\
let regTxt = document.getElementById("reged");          // /\
let users = [];                                         // /\


btn.addEventListener("click", function(){               // \/
    if(txt.style.display == "none"){                    // \/
        txt.style.display = "block";                    // \/
        btn.style.border = "3px solid black";           // Show/Hide
        txt.style.fontWeight = "700";                   // Contact
    }else{                                              // Info on
        txt.style.display = "none";                     // Button
        btn.style.border = "none";                      // Click
        txt.style.fontWeight = "200";                   // /\
    }                                                   // /\
});                                                     // /\


dark.addEventListener("click", function(){              // \/
    counter++;                                          // \/
    if(counter % 2){                                    // \/
        footer.style.backgroundColor = "black";         // \/
        header.style.backgroundColor = "black";         // \/
        main.style.backgroundColor = "gray";            // Dark
        desc.style.backgroundColor =                    // And
        "rgba(128, 128, 128, 0.8)";                   // Light
        dark.innerHTML = "Light Mode";                  // Modes
    }else{                                              // Switch
        footer.style.backgroundColor =                  // on
        "rgb(0 0 0 / 0.61)";                            // Button
        header.style.backgroundColor = "pink";          // Click
        desc.style.backgroundColor = "#ffc0cbd3";     // /\
        main.style.backgroundColor = "#ffc0cb9a";     // /\
        dark.innerHTML = "Dark Mode";                   // /\
    }                                                   // /\
});                                                     // /\


logInBtn.addEventListener("click", function(){          // \/
    if(form.style.display == "none"){                   // \/
        regDiv.style.display = "none";                  // FormDiv
        form.style.display = "block";                   // Show/Hide
        notFound.style.display = "none";                // on
    }else{                                              // Button
        form.style.display = "none";                    // Click
    }                                                   // /\
});                                                     // /\


loginForm.addEventListener("submit", function(el){      // \/
    el.preventDefault();                                // \/
    let mail = document.getElementById("logMail")       // \/
    .value.toLowerCase();                               // \/
    let pass = document.getElementById("logPass")       // \/
    .value;                                             // \/
    if(users.length){                                   // \/
        for (let i = 0; i < users.length; i++) {        // \/
            if(mail == users[i][0] &&                   // \/
               pass == users[i][1]){                    // \/
                form.style.display = "none";            // \/
                userMail.innerHTML = mail;              // \/
                userMail.style.display = "block";       // \/
                logInBtn.style.display = "none";        // Full
                logOutBtn.style.display = "block";      // Validational
                regBtn.style.display = "none";          // LogIn
                break;                                  // Logic
            }else{                                      // /\
                notFound.style.display = "block";       // /\
                notFound.style.color = "red";           // /\
                notFound.innerHTML =                    // /\
                "User Not Found!";                      // /\
            };                                          // /\
        };                                              // /\
    }else{                                              // /\
        notFound.style.display = "block";               // /\
        notFound.style.color = "red";                   // /\
        notFound.innerHTML = "User Not Found!";         // /\
    };                                                  // /\
});                                                     // /\


logOutBtn.addEventListener("click", function(){         // \/
    logInBtn.style.display = "block";                   // \/
    userMail.style.display = "none";                    // LogOut
    userMail.innerHTML = "";                            // Button
    logOutBtn.style.display = "none";                   // Logic
    regBtn.style.display = "block";                     // /\
});                                                     // /\


regBtn.addEventListener("click", function(){            // \/
    if(regDiv.style.display == "none"){                 // \/
        form.style.display = "none";                    // RegDiv
        regDiv.style.display = "block";                 // Show/Hide
        reged.style.display = "none";                   // On
    }else{                                              // Button
        regDiv.style.display = "none";                  // Click
    };                                                  // /\
});                                                     // /\


regForm.addEventListener("submit", function(e){         // \/
    e.preventDefault();                                 // \/
    let mail = document.getElementById("regMail")       // \/
    .value.toLowerCase();                               // \/
    let pass = document.getElementById("regPass")       // \/
    .value;                                             // \/
    let newUser = true;                                 // \/
    if(users.length){                                   // \/
        for (let i = 0; i < users.length; i++) {        // \/
            if(users[i][0] == mail){                    // \/
                newUser = false;                        // \/
                reged.innerHTML =                       // \/
                "Email Already Registered";             // \/
                reged.style.display = "block";          // \/
                reged.style.color = "red";              // Full
                reged.style.borderColor = "red";        // Validational
                break;                                  // Registration
            };                                          // Logic
        };                                              // /\
        if(newUser){                                    // /\
            users.push([mail, pass]);                   // /\
            reged.innerHTML =                           // /\
            "Successfully Registered!";                 // /\
            reged.style.display = "block";              // /\
        }                                               // /\
    }else{                                              // /\
        users.push([mail, pass]);                       // /\
        reged.innerHTML =                               // /\
        "Successfully Registered!";                     // /\
        reged.style.display = "block";                  // /\
    };                                                  // /\
});                                                     // /\