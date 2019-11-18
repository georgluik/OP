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

// nimekirja element
const liElement = liElemendid[0];
// kustutamislink
const link = liElement.children[0];
// class ja attribute kustutamine
// class
let sisu = link.className;
sisu = link.classList;
sisu = link.classList[1];

link.classList.remove('secondary-content');
link.classList.add('secondary-content');

// atribuut
sisu = link.getAttribute('href');
link.setAttribute('href', 'https://google.com');
link.setAttribute('title', 'Google');
link.removeAttribute('title');
sisu = link;
console.log(sisu);