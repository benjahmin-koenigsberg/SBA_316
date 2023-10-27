
import { suggestions } from "./suggestions.js"

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const submitBtn = document.getElementById('submitBtn')

let recieptientName;
let recieptientEmail;
let subject;
let gratitudeMessage;
let localStorageArray = [];



nameInput.addEventListener('change', (e) => {
    recieptientName = e.target.value;

})

emailInput.addEventListener('change', (e) => {
    recieptientEmail = e.target.value;
})

subjectInput.addEventListener('change', (e) => {
    subject = e.target.value
})

messageInput.addEventListener('change', (e) => {
    gratitudeMessage = e.target.value;
})


submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    // mailTo()
    saveEmail()
    addToSaved()

})

function mailTo() {
    window.location.href = `mailto:${recieptientEmail}?subject=${subject}&body=${gratitudeMessage}`;
}

function saveEmail() {

    const obj = {
        name: recieptientName,
        subject: subject,
        email: recieptientEmail,
        message: gratitudeMessage
    }

    const newEntry = JSON.stringify(obj)
    localStorage.setItem(
        recieptientName,
        newEntry
    )
    return
}




// function allStorage() {
//     for (let i = 0; i < localStorage.length; i++) {
//         let entry = localStorage.getItem(localStorage.key(i));
//         localStorageArray.push(JSON.parse(entry))
//     }
// }



// window.addEventListener('load', () => {
//     allStorage()
// })




const suggestionsSection = document.querySelector('#suggestions')

suggestions.forEach((suggestion) => {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const subjectLine = document.createElement('h6')
    subjectLine.classList.add("card-subtitle")
    subjectLine.innerText = suggestion.subject;
    const message = document.createElement('p')
    message.classList.add('card-text')
    message.innerText = suggestion.message
    cardBody.append( subjectLine, message)
    cardContainer.append(cardBody)
    suggestionsSection.append(cardContainer)

})



function addToSaved(){

    const savedSection = document.querySelector('#saved')
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const nameField = document.createElement('h5')
    nameField.innerText = recieptientName;
    const subjectLine = document.createElement('h6')
    subjectLine.classList.add("card-subtitle")
    subjectLine.innerText = subject;
    const message = document.createElement('p')
    message.classList.add('card-text')
    message.innerText = gratitudeMessage;
    cardBody.append(nameField, subjectLine, message)
    cardContainer.append(cardBody)
    savedSection.append(cardContainer)
}
