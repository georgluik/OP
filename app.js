// document meetodid
// elementide kustutamine

// leia antud DOM-is kõik li elemendid

const liElemendid = document.querySelectorAll('li');
// kustuta konkreetne element
liElemendid[2].remove();

// leia antud DOM-is ul element

const ulElement = document.querySelector('ul');
// kustuta elemendist li
// li on ul child element

ulElement.removeChild(liElemendid[1]);


console.log(ulElement);