//import { suggestions } from "./suggestions.js";
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')

let recieptientName;
let recieptientEmail;
let subject;
let gratitudeMessage;


nameInput.addEventListener('change', (e)=>{
    recieptientName = e.target.value;

})

emailInput.addEventListener('change', (e) => {
    recieptientEmail = e.target.value;
})

subjectInput.addEventListener('change', (e)=>{
    subject = e.target.value
})

messageInput.addEventListener('change', (e) => {
    gratitudeMessage = e.target.value;
})


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    console.log(recieptientName)
    console.log(recieptientEmail)
    console.log(subject)
    console.log(gratitudeMessage)
    mailTo()
})

function mailTo() {
    window.location.href = `mailto:${recieptientEmail}?subject=${subject}&body=${gratitudeMessage}`;
}
