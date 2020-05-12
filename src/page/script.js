const form = document.getElementById('form');
//error messages
const spanEmail = document.getElementById('span-email');
const spanSubject = document.getElementById('span-subject');
const spanMessage = document.getElementById('span-message');
//inputs
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

const erros = 0;
const data = {
    email: '',
    subject: '',
    message: '',
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;
    const subjectVal = subject.value;
    const messageVal = message.value;

    //check if subject box is not empty
    if (!subjectVal) {
        spanSubject.classList.add('show-span');
        subject.classList.add('error');
        erros++;
    } else {
        subject.classList.remove('error');
        spanSubject.classList.remove('show-span');
        data.subject = subjectVal;
    }
    //check if message box is not empty
    if (!messageVal) {
        spanMessage.classList.add('show-span');
        message.classList.add('error');
        erros++;
    } else {
        message.classList.remove('error');
        spanMessage.classList.remove('show-span');
        data.message = messageVal;
    }
    // check if it is a valid email
    if (!validateEmail(emailVal)) {
        email.classList.add('error');
        spanEmail.classList.add('show-span');
        erros++;
    } else {
        email.classList.remove('error');
        spanEmail.classList.remove('show-span');
        data.email = emailVal;
    }
    if (!erros) {
        console.log(data);
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function emailData(email, subject, message) {

}