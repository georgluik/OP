// document meetodid
// multiply elements selectors

// klassi nime järgi
let sisu = document.getElementsByClassName('collection-item');

console.log(sisu);
console.log(sisu[0]);
sisu[0].style.color = 'orange';
sisu[2].textContent = 'Õpi Arvutivõrgud';

// querySelector + klassi nime järgi
let nimekirjaElemendid = document.querySelector('ul').getElementsByClassName('collection-item');

// elemendi nime järgi
nimekirjaElemendid = document.getElementsByTagName('li');

// teisendame HTMLCollection massiiviks (Array)
nimekirjaElemendid = Array.from(nimekirjaElemendid);
// massiivi meetodite kasutamine
nimekirjaElemendid.reverse();

// massiivi läbimine tsükliga
// for
for(let i = 0; i < 3; i++){
    console.log(nimekirjaElemendid[i].className)
}

// for each
// nimekirjaElemendid.forEach(function(element){
//    console.log(element);
//    element.style.background = '#ddd';
// });

let nimekiriPaaritu = document.querySelectorAll('li:nth-child(odd)');
// console.log(nimekiriPaaritu)
;

let nimekiriPaaris = document.querySelectorAll('li:nth-child(even)')
; 
console.log(nimekiriPaaris)
