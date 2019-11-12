// window objects / methods / properties

// alert
// window.alert('Tere hommikust');

// prompt
// const sisend =prompt('Sisesta oma nimi');
// alert('Tere Hommikust, ' + sisend +
// '!');

// confirm
/* if(confirm('Kas oled nõus?')){
    console.log('jah');  
} else {
    console.log('ei');
} */


// välimõõdud
let valiKorgus = window.outerHeight;
let valiLaius = window.outerWidth;

console.log(valiKorgus, valiLaius);

// sisemõõdud
let siseKorgus = window.innerHeight;
let siseLaius = window.innerWidth;

// console.log(siseLaius);

/* scroll
scrollY = window.scrollY;
scrollX = window.scrollX;

console.log(scrollY);  */

// location objekt
let objekt = window.location;
let hostname = window.location.hostname;
let port = window.location.port;
let href = window.location.href;
let search = window.location.search;
console.log(hostname);

// redirect 
// window.location.href = 'https://khk.ee';

// reload
// window.location.reload();


