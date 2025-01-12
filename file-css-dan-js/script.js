// bagian project

let scrollContainer = document.querySelector(".carousel");
let prevBtn = document.getElementById("btn-prev");
let nextBtn = document.getElementById("btn-next");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 300;
});

prevBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 300;
});

// bagian Form

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateFirstName() {
    let firstName = document.getElementById('first-name').value;

    if (firstName.length == 0) {
        firstNameError.innerHTML = '<p style="position: relative; bottom: -3px;">Please fill in first name</p>';
        return false;
    }
    firstNameError.innerHTML = '<iconify-icon icon="lets-icons:check-fill"></iconify-icon>';
    return true;
}

function validateLastName() {
    let lastName = document.getElementById('last-name').value;

    if (lastName.length == 0) {
        lastNameError.innerHTML = '<p style="position: relative; bottom: -3px;">Please fill in last name</p>';
        return false;
    }
    lastNameError.innerHTML = '<iconify-icon icon="lets-icons:check-fill"></iconify-icon>';
    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        email.innerHTML = 'Please fill in email';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = '<p style="position: relative; bottom: -3px;">Your email is invalid</p>';
        return false;
    }
    emailError.innerHTML = '<iconify-icon icon="lets-icons:check-fill"></iconify-icon>';
    return true;
}

function validateMessage() {
    let message = document.getElementById('message').value;
    let required = 10;
    let messageForm = required - message.length;

    if (message.length == 0) {
        messageError.innerHTML = '<p style="position: relative; bottom: -8px;">Please fill in message</p>';
        return false;
    } else if (messageForm > 0) {
        messageError.innerHTML = messageForm + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<iconify-icon icon="lets-icons:check-fill"></iconify-icon>';
    return true;
}

function validateForm() {
    if (!validateFirstName() || !validateLastName() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = firstNameError.innerHTML + lastNameError.innerHTML + emailError.innerHTML + messageError.innerHTML;
        return false;
    }
}