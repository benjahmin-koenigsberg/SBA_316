
import { suggestions } from "./suggestions.js"

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const subjectInput = document.getElementById('subject')
const messageInput = document.getElementById('message')
const sender = document.getElementById('sendersName')
const submitBtn = document.getElementById('submitBtn')
const saveBtn = document.querySelector('#saveBtn')
const suggestionsSection = document.querySelector('#suggestions')
const savedSection = document.querySelector('#saved')
const clearBtn = document.getElementById('clearBtn')

const savedArray = [];

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

suggestions.forEach((suggestion) => {

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card')
    const cardBody = document.createElement('div')
    cardContainer.append(cardBody)
    //use first child method
    cardContainer.firstChild.classList.add('card-body')
    const subjectDiv = document.createElement('div')
    subjectDiv.classList.add('subjectDiv')
    const copyIcon = document.createElement('i')
    copyIcon.classList.add("fa-arrow-right", "fa", )
    const subjectLine = document.createElement('h6')

    subjectDiv.append(subjectLine, copyIcon)

    subjectLine.classList.add("card-subtitle", 'subject-text', 'text-center')
    subjectLine.innerText = suggestion.subject;


    const messageDiv = document.createElement('div')
    const copyIcon2 = document.createElement('i')
    copyIcon2.classList.add("fa-arrow-right", "fa",)
    messageDiv.classList.add('messageDiv')
    const message = document.createElement('p')

    messageDiv.append(message, copyIcon2)

    message.classList.add('card-text', 'message-text')
    message.innerText = suggestion.message

    copyIcon.addEventListener('click', () => {
        navigator.clipboard.writeText(subjectLine.innerText);
        subjectInput.value = suggestion.subject

    })

    copyIcon2.addEventListener('click', () => {
        navigator.clipboard.writeText(message.innerText);
        messageInput.value = `Dear ${nameInput.value} \n ${suggestion.message} \n Sincerly ${sender.value}`
    })


    cardBody.append(subjectDiv, messageDiv)
    suggestionsSection.append(cardContainer)

})


function mailTo() {
    window.location.href = `mailto:${emailInput.value}?subject=${subjectInput.value}&body=${messageInput.value}`;
}


submitBtn.addEventListener('click', (e) => {

    e.preventDefault()
    if (!emailInput.value.match(emailRegex)) {
        window.alert('Please enter a valid email address')
        return
    }

    if ((!nameInput.value) || (!emailInput.value) || (!subjectInput.value) || (!messageInput.value)) {
        window.alert('Please fill in all fields')
        return

    }
     else {
        mailTo()
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
    }
    return
})





saveBtn.addEventListener('click', (e) => {

    e.preventDefault()


    if (!emailInput.value.match(emailRegex)) {

        window.alert('Please enter a valid email address')
        return
    }

    if ( (!nameInput.value) || (!emailInput.value) || (!subjectInput.value) || (!messageInput.value) ) {
        window.alert('Please fill in all fields')
        return
    }
    else {

        saveItem()

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        const dateField = document.createElement('h5')
        dateField.classList.add('card-title', 'date')
        dateField.innerText = new Date().toDateString()
        const nameField = document.createElement('h5')
        nameField.innerText = nameInput.value
        nameField.classList.add('card-title')
        const subjectLine = document.createElement('h6')
        subjectLine.innerText = subjectInput.value
        subjectLine.classList.add("card-subtitle")
        const message = document.createElement('p')
        message.classList.add('card-text')
        message.innerText = messageInput.value
        cardBody.append(dateField, nameField, subjectLine, message)
        cardContainer.append(cardBody)
        savedSection.append(cardContainer)
    }

})


 clearBtn.addEventListener('click', clearItems)



function saveItem(){


    if ( (savedSection.innerText === 'No Messages Currently Saved')  )
    delete savedSection.innerText

    const item = {
        date: new Date().toDateString(),
        name: nameInput.value,
        subject: subjectInput.value,
        email: emailInput.value,
        message: messageInput.value
    }
    console.log(item)
    localStorage.setItem(nameInput.value, JSON.stringify(item))

}



function getStorage(){

    for (let i = 0; i <= localStorage.length; i++) {
        let item = localStorage.getItem(localStorage.key(i));
        if ( item !== "INFO" && item !== null && item !== undefined)
            savedArray.push(JSON.parse(item));
    }
}

function clearItems(){
    localStorage.clear();
    location.reload();
}


window.addEventListener('load', ()=>{

    getStorage()

    savedArray.forEach((entry) => {

        const cardContainer = document.createElement('div')
        cardContainer.classList.add('card')
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        //const dateField = document.querySelector('.date')
        const dateField = document.createElement('h5')
        dateField.classList.add('card-text')
        dateField.innerText = entry.date;
        const nameField = document.createElement('h5')
        nameField.innerText = entry.name
        nameField.classList.add('card-title')
        const subjectLine = document.createElement('h6')
        subjectLine.classList.add("card-subtitle")
        subjectLine.innerText = entry.subject
        const message = document.createElement('p')
        message.classList.add('card-text')
        message.innerText = entry.message
        cardBody.append(dateField, nameField, subjectLine, message)
        cardContainer.append(cardBody)
        savedSection.append(cardContainer)
    })

})
