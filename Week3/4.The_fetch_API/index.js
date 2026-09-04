let mydiv = document.querySelector('#mydiv');

let newElement = document.createElement('span');
newElement.textContent = "Harsimran"

mydiv.insertAdjacentElement('beforebegin', newElement); 