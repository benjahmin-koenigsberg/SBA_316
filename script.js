
import { suggestions } from "./suggestions.js"

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')
const saveBtn = document.querySelector('#saveBtn')
const suggestionsSection = document.querySelector('#suggestions')
const savedSection = document.querySelector('#saved')



let recieptientName;
let recieptientEmail;
let subject;
let gratitudeMessage;
let savedArray = [];


nameInput.addEventListener('blur', (e) => {
    recieptientName = e.target.value;

})

emailInput.addEventListener('blur', (e) => {
    recieptientEmail = e.target.value;
})

subjectInput.addEventListener('blur', (e) => {
    subject = e.target.value
})

messageInput.addEventListener('blur', (e) => {
    gratitudeMessage = e.target.value;
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!recieptientEmail.match(emailRegex)) {
        window.alert('Please enter a valid email address')
        return
    }
    if ( (!recieptientName) || (!subject) || (!gratitudeMessage) ) {
        window.alert('Please fill in all fields')
        return
        } else {
        mailTo()
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        }
})





saveBtn.addEventListener('click', (e) => {

    e.preventDefault()

    if ((!recieptientName) || (!recieptientEmail) || (!subject) || (!gratitudeMessage)) {
        window.alert('Please fill in all fields')
        return
    }

            const obj = {
                name: recieptientName,
                subject: subject,
                email: recieptientEmail,
                message: gratitudeMessage
            }
            savedArray.push(obj)

            savedArray.forEach((entry) => {

                const cardContainer = document.createElement('div')
                cardContainer.classList.add('card')
                const cardBody = document.createElement('div')
                cardBody.classList.add('card-body')
                const nameField = document.createElement('h5')
                nameField.innerText = entry.name
                nameField.classList.add('card-title')
                const subjectLine = document.createElement('h6')
                subjectLine.classList.add("card-subtitle")
                subjectLine.innerText = entry.subject
                const message = document.createElement('p')
                message.classList.add('card-text')
                message.innerText = entry.message
                cardBody.append(nameField, subjectLine, message)
                cardContainer.append(cardBody)
                savedSection.append(cardContainer)
            })
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';


})



suggestions.forEach((suggestion) => {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    const cardBody = document.createElement('div')
    cardContainer.append(cardBody)
    //use first child method
    cardContainer.firstChild.classList.add('card-body')
    const subjectLine = document.createElement('h6')
    subjectLine.classList.add("card-subtitle", 'subject-text', 'text-center')
    subjectLine.innerText = suggestion.subject;

    subjectLine.addEventListener('click', () => {
        navigator.clipboard.writeText(subjectLine.innerText);
    })

    const message = document.createElement('p')
    message.classList.add('card-text', 'message-text')
    message.innerText = suggestion.message

    message.addEventListener('click', () => {
    navigator.clipboard.writeText(message.innerText);
    })

    cardBody.append(subjectLine, message)
    suggestionsSection.append(cardContainer)

})


function mailTo() {
    window.location.href = `mailto:${recieptientEmail}?subject=${subject}&body=${gratitudeMessage}`;
}
