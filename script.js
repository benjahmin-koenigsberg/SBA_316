
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


})

saveBtn.addEventListener('click', (e) => {
    e.preventDefault()
    savedArray.push({
        name: recieptientName,
        subject: subject,
        email: recieptientEmail,
        message: gratitudeMessage
    })

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
    console.log(savedArray)

})





function saveEmail() { }



function mailTo() {
    window.location.href = `mailto:${recieptientEmail}?subject=${subject}&body=${gratitudeMessage}`;
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
    cardBody.append(subjectLine, message)
    cardContainer.append(cardBody)
    suggestionsSection.append(cardContainer)

})
