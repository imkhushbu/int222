/* -------------- Questions Solved Combined -------------------------------- 

Q. Write a JavaScript code to create a form that contains First name,
Last Name, Password and Confirm Password, Email Address and submit button. 
Apply the following validations : 
1. Email address must be validated
2. Password and confirm password must be same, otherwise print "Password & Confirm password does not match"
3. All Fields must be marked as compulsory.
4. On submit, if validations fail, it must alert the user.

                                     OR

Q. Write a code in JavaScript to create a registration form and apply validation on any 5 fields.

                                     OR

Q. Write a JS code to create a form. Apply validations to any fields such that error message gets printed
side by side as user is entering the values.

*/
let fnameErr = "present";
let lnameErr = "present";
let pwdErr = "present";
let cpwdErr = "present";
let equalityErr = "";

let fnameWarn = document.querySelector("#warn_fname");
let lnameWarn = document.querySelector("#warn_lname");
let pwdWarn = document.querySelector("#warn_pwd");
let cpwdWarn = document.querySelector("#warn_cpwd");
let equalWarn = document.querySelector("#warn_equal");

function fnameChange() {
    const fname = document.querySelector("#fname").value;
    
    if(fname.length < 2){
        fnameErr = "* First Name should contain at least 2 alphabets. *";
    } else {
        fnameErr = "";
    }
    fnameWarn.textContent = fnameErr;
}

function lnameChange() {
    const lname = document.querySelector("#lname").value;
    
    if(lname.length < 2){
        lnameErr = "* Last Name should contain at least 2 alphabets. *";
    } else {
        lnameErr = "";
    }
    lnameWarn.textContent = lnameErr;
}

function validatePass(){
    let pwd = document.querySelector("#pwd").value;
    if(pwd.length < 2 || pwd.length >= 13){
        pwdErr = "* Password should be 2-12 characters long. *";
    } else{
        pwdErr = "";
    }
    pwdWarn.textContent = pwdErr;
}

function validateCPass(){
    let cpwd = document.querySelector("#cnf_pwd").value;
    if(cpwd.length < 2 || cpwd.length >= 13){
        cpwdErr = "*Confirm Password should be 2-12 characters long. *";
    } else{
        cpwdErr = "";
        equalityErr = validateEquality();
    }
    cpwdWarn.textContent = cpwdErr;
    equalWarn.textContent = equalityErr;
}

function validateEquality(){
    let pwd = document.querySelector("#pwd").value;
    let cpwd = document.querySelector("#cnf_pwd").value;

    if(pwd !== cpwd){
        return "Password and Confirm password do not match!";
    } else{
        return "";
    }
}

function submitForm() {
    if(fnameErr === "" && lnameErr === "" && pwdErr === "" && cpwdErr === "" && equalityErr === ""){
        window.alert(`All Validations are passed!`);
    } else {
        window.alert(`Some validations are not passed!`);
    }
}