'use strict';

const TYPE = 'DOMContentLoaded';
const FORM_ELEMENT_ID = 'senderForm';
const CONTAINER_ELEMENT_ID = 'messageContainer';
const SENDER_NAME_ID = 'senderName';
const SENDER_TEXT_ID = 'senderText';
const CLASS_LIST_NAME = 'user';
const STAGE_NAME = 'users'

document.addEventListener(TYPE, () => {
    const form = document.getElementById(FORM_ELEMENT_ID);
    const messageContainer = document.getElementById(CONTAINER_ELEMENT_ID);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById(SENDER_NAME_ID).value;
        const text = document.getElementById(SENDER_TEXT_ID).value;
        const users = document.createElement('div');
        users.classList.add(CLASS_LIST_NAME);
        const userName = document.createElement('p');
        userName.classList.add(SENDER_NAME_ID);
        userName.textContent = 'От: ' + name;
        const message = document.createElement('p');
        message.classList.add(SENDER_TEXT_ID);
        message.textContent = text;
        users.appendChild(userName);
        users.appendChild(message);
        messageContainer.appendChild(users);
        form.reset();
        localStorage.setItem(STAGE_NAME, messageContainer.innerHTML);
    });

    const savedUsers = localStorage.getItem(STAGE_NAME);
    if (savedUsers) {
        messageContainer.innerHTML = savedUsers;
    }
});