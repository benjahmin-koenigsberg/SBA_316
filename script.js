import { suggestions } from "./suggestions.js";
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('name')
const messageInput = document.getElementById('name')
const submitBtn = document.getElementById('submitBtn')

let recieptientName;
let recieptientEmail;
let gratitudeMessage;

nameInput.addEventListener('change', (e)=>{
    recieptientName = e.target.value;

})

emailInput.addEventListener('change', (e) => {
    recieptientEmail = e.target.value;
})

messageInput.addEventListener('change', (e) => {
    gratitudeMessage = e.target.value;
})


submitBtn.addEventListener('click', mailTo)

function mailTo() {
    window.location.href = `mailto:${recieptientEmail}&body=${gratitudeMessage}`;
    console.log(recieptientName)
    console.log(recieptientEmail)
    console.log(gratitudeMessage)

}
