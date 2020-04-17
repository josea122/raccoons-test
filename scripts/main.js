let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/raccoon-1.png') {
        myImage.setAttribute ('src','images/raccoon-2.png');
    } else {
        myImage.setAttribute ('src','images/raccoon-1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Raccoons are cool, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Raccoons are cool, ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}