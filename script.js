const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');



// function showError(input, message) {
//     const formList = input.parentElement;
//     formList.className = "form-list error";
//     const small = formList.querySelector('small');
//     small.innerText = message;
// }
// function showSuccess(input) {
//     const formList = input.parentElement;
//     formList.className = "form-list success";

// }

function cheakEmail(input) {
    const re = /\S+@\S+\.\S+/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    }
    else {
        showError(input, "Email is not valid");
    }
}

function cheakPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "password do not match");
    }
}

function cheakRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    })

}

// cheak input length
function cheakLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)}  must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)}  must be less than ${max} characters`);

    }
    else {
        showSuccess(input);
    }

}
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();


    cheakRequired([username, email, number, password, confirm]);

    cheakLength(username, 3, 12);
    cheakLength(number, 10);
    cheakLength(password, 8);

    cheakEmail(email);
    cheakPasswordMatch(password, confirm);




    // if(username.value === ''){
    //     showError(username, 'username is required');
    // }
    // else{
    //     showSuccess(username);
    // }

    // if(email.value === ''){
    //     showError(email, 'email is required');
    // }
    // else if(!isValidEmail(email.value)) {
    //     showError(email, 'email is not valid');
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value === ''){
    //     showError(password, 'password is required');
    // }
    // else{
    //     showSuccess(password);
    // }

    // if(confirm.value === ''){
    //     showError(confirm, 'confirm password is required');
    // }
    // else{
    //     showSuccess(confirm);
    // }
})
