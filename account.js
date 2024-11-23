
function login(){
    let logemail = document.getElementById("logemail").value;
    let logpassword = document.getElementById("logpassword").value;
    try{
        if(logemail !== localStorage.getItem("email")){
            throw "email not found"
        }
        if(logpassword !== localStorage.getItem("password")){
            throw "password does not match"
        }
        console.log("Asde")
        window.location.href = "index.html"
    }
    catch(errormessage){
        document.getElementById("errorr").innerHTML = errormessage;
    }
}
function create(){
    let inputemail = document.getElementById("email").value;
    let inputpassword = document.getElementById("password").value;
    let coninputpassword = document.getElementById("conpassword").value;

    try{
        if(inputemail === ""){
            throw "Email can't be blank";
        }
        if(inputpassword !== coninputpassword){
            throw "Password and Confirm Password does not match"
        }
        if(coninputpassword.length < 10){
            throw "Password must be minimum of 10 characters"
        }
        localStorage.setItem('email', inputemail);
        localStorage.setItem('password', coninputpassword);

        window.location.href = "login.html"
    }
    catch(errormessage){
        document.getElementById("error").innerHTML = errormessage;
    }        
}


const signinButton = document.getElementById("signin");
const createButton = document.getElementById("create");

if (signinButton) {
    signinButton.addEventListener("click", () => login());
}

if (createButton) {
    createButton.addEventListener("click", () => create());
}
