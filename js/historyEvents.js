'use strict';

const setDisplay = function(descriptions, value) {
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = value;
    }
}

const getDescription = function(subjectId) {
    const description = document.getElementById(subjectId);
    if (description.style.display === 'block') {
        description.style.display = 'none';
        return;
    }
    const descriptions = document.getElementsByClassName('description');
    setDisplay(descriptions, 'none');
    description.style.display = 'block';
}