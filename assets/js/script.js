function validateEmail() {
    let emailInput = document.querySelector('#email');
    let emailError = document.querySelector('#emailError');

    if (emailInput.value.indexOf('@') === -1) {
        emailError.textContent = 'Please check your email';
        emailInput.style.border = '1px solid red';
        setTimeout(() => {
            emailError.textContent = '';
            emailInput.style.border = '';
        }, 5000);
    } else {
        emailError.textContent = '';
        emailInput.style.border = '';
    }
}

function validateEmail2() {
    let emailInput2 = document.querySelector('#email2');
    let emailError2 = document.querySelector('#erroremailexample');

    if (emailInput2.value.indexOf('@') === -1) {
        emailError2.textContent = 'Please check your email';
        emailInput2.style.border = '1px solid red';
        setTimeout(() => {
            emailError2.textContent = '';
            emailInput2.style.border = '';
        }, 5000);
    } else {
        emailError2.textContent = '';
        emailInput2.style.border = '';
    }
}
