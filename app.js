// document

let sisu;

sisu = document; // sisu html-is
sisu = document.all; // html tagis kasutamisjärjekorras

sisu = document.all[2]; // konkreetne html tag
sisu = document.all.length; // palju on html tagi kasutusel

// document properties
sisu = document.head; // head sisu
sisu = document.body; // body sisu
sisu = document.doctype; // doctype
sisu = document.domain; // 
sisu = document.URL;
sisu = document.characterSet;
sisu = document.contentType; 

// formi andmed
sisu = document.forms; // kõik formid
sisu = document.forms[0]; // esimene form
sisu = document.forms[0].id; // esimese formi id
sisu = document.forms[0].method; // formi töötlus meetod
sisu = document.forms[0].action;

// linkide andmed
sisu = document.links; // kõik lingid
sisu = document.links[0]; // esimene link
sisu = document.links[0].className; // lingi klassid
sisu = document.links[0].classList[1]; // klasside massiiv ja sealt elemendi lugemine 

// pildid
sisu = document.images;

// skriptid
sisu = document.scripts;
sisu = document.scripts[0].getAttribute('src'); // materialize js
sisu = document.scripts[1].getAttribute('src'); // local js


console.log(sisu);


