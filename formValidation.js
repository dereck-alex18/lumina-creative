const firstName = document.getElementById('first-name');
const secondName = document.getElementById('second-name');
const email = document.getElementById('email-address');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errors = Array.from(document.getElementsByClassName('error'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    validateInputs();

    if(checkForErrors()){
         e.currentTarget.submit();
    }
});

const setError = (element, message) => {
    
    const parentElement = element.parentElement;
    const errorMessage = parentElement.querySelector('.error');

    errorMessage.textContent = message
}

const removeError = (element) => {
    const parentElement = element.parentElement;
    const errorMessage = parentElement.querySelector('.error');

    errorMessage.textContent = '';
}

const validateEmail = (emailValue) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(emailValue);
    
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const secondNameValue = secondName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();
    
    if(firstNameValue === ''){
        setError(firstName, "Please, add your first name!");
    } else{
        removeError(firstName);
    }

    if(secondNameValue === ''){
        setError(secondName, "Please, add your second name!");
    } else{
        removeError(secondName);
    }

    if(!validateEmail(emailValue)){
        setError(email, "Please, enter a valid email address!")
    } else{
        removeError(email);
    }

    if(messageValue === ''){
        setError(message, "Please, add a message!");
    } else{
        removeError(message);
    }
}

const checkForErrors = () => {
    for(const error of errors){
        if(error.textContent !== ''){
            return false;
        }
    }
    return true;
}
