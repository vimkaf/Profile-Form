document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.querySelector("#signup");
    const loginButton = document.querySelector('#login');
    const logOutButton = document.querySelector('#logout');

    if(signupButton !== null){
        signupButton.addEventListener('click', validateSignUpForm);
    }

    if(loginButton !== null){
        loginButton.addEventListener('click',validateLoginForm);
    }

    if(logOutButton !== null){
        logOutButton.addEventListener('click',logOut);
    }
});


const logOut = () => {
    window.location = "login.html";
}

const validateLoginForm = () => {
    let formValidated = false;

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if(email.length <= 0 ){
        alert('Email is required');
    }

    else if(!email.includes("@")){
        alert('Email must contain @ symbol');
    }

    else if(password.length < 5){
        alert('Password should me more than 6 characters');
    }

    else{
        formValidated = true;
    }


    confirmValidation(formValidated, "profile.html");



}

const validateSignUpForm = () => {

    let formValidated = false;

    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const dob = document.querySelector("#dob");

    const year = dob.value.split("-")[0];
    const fullYear = new Date().getFullYear();
    const yearDiff = fullYear - year;

    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirmpassword");

    if(username.value.length < 5 ){
        // username.classList.add('error');
        alert('Username should me more than 6 characters');
    }

    else if(email.value.length <= 0 ){
        alert('Email is required');
    }

    else if(!email.value.includes("@")){
        alert('Email must contain @ symbol');
    }

    else if(phone.value.length !== 11){
        alert('Phone number must be 11 digits');
    }
    else if(yearDiff < 18){
        alert('You must be above 18 to signup');

    }
    else if(password.value.length < 5){
        alert('Password should me more than 6 characters');
    }

    else if(password.value !== confirmpassword.value){
        alert('Password and Confirm password do not match');
    }

    else{
        formValidated = true;
    }

    confirmValidation(formValidated, "login.html");

}

const confirmValidation = (formStatus, redirectURL) => {
    if(formStatus){
        alert('Form Validated Successfully');
        document.querySelector("form").reset();
        window.location = redirectURL;
    }

}