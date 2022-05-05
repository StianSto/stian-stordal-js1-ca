const submitBtn = document.querySelector(".btn--submit");
const form = document.querySelector("form");
const inputName = document.querySelector("#name");
const inputAddress = document.querySelector("#address");
const inputEmail = document.querySelector("#email");
const inputQuery = document.querySelector("#query");

const nameError = document.querySelector(".error--name");
const addressError = document.querySelector(".error--address");
const emailError = document.querySelector(".error--email");
const queryError = document.querySelector(".error--query");
const validationMsg = document.querySelector(".validation-status")



form.onsubmit = function(e) {
    e.preventDefault();

    let formIsValid = true;

    nameError.style.display = "none";   
    addressError.style.display = "none";        
    emailError.style.display = "none";        
    queryError.style.display = "none";        

    if (inputName.value.length <= 0) {
        nameError.style.display = "block";        
        formIsValid = false;
    }
    if(inputAddress.value.trim().length < 25 ){
        addressError.style.display = "block";        
        formIsValid = false;
    }

    const regExEmail = /\S+@\S+\.\S+/;
    const testEmail = regExEmail.test(inputEmail.value);

    if (testEmail === false) {
        emailError.style.display = "block";        
        formIsValid = false;
    }

    if(inputQuery.value.trim().length < 10) {
        queryError.style.display = "block";        
        formIsValid = false;
    }

    if(formIsValid) {
        validationMsg.style.display = "block"
        validationMsg.innerHTML = `<p>Form submitted successfully</p>`
    }
}

