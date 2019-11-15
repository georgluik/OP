// document meetodid
// node omadused ja meetodid

let nimekiri = document.querySelectorAll('ul.collection');

let nimekirjaElement = document.querySelectorAll('li.collection-item');
console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

nimekirjaElement = nimekiri.childNodes;
console.log(nimekirjaElement);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
sisu = nimekiri.childNodes[0].nodeName;
sisu = nimekiri.childNodes[3].nodeType;

/*
erinevad node tüübid
1 - element
2 - atribuut
3 - tekst
8 - kommentaar
9 - dokument
10 - doctype
*/

sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'Õpi rohkem JS';
nimekiri.children[2].children[0].id = 'katse';
console.log(sisu);

sisu = nimekiri.firstChild; // node type
sisu = nimekiri.firstElementChild; // value

sisu = nimekiri.childElementCount;

nimekirjaElement = document.querySelector('li.collection-item');
sisu = nimekirjaElement.parentNode;
sisu = nimekirjaElement.parentElement;
sisu = nimekirjaElement.parentElement.parentElement;

sisu = nimekirjaElement.nextSibling; // node type
sisu = nimekirjaElement.nextElementSibling;
console.log(sisu);

