// sündmused
// click

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');


// kustutame lisaUusYlesanne väärtus
lisaUusYlesanne.value = '';

// klaviatuur
// keydown
lisaUusYlesanne.addEventListener('keydown', syndmus);

// keyup
// lisaUusYlesanne.addEventListener('keyup', syndmus);

// keypress
lisaUusYlesanne.addEventListener('keypress', syndmus);

// focus
lisaUusYlesanne.addEventListener('focus', syndmus);

// blur
lisaUusYlesanne.addEventListener('blur', syndmus);

// copy
lisaUusYlesanne.addEventListener('cut', syndmus);

// paste
lisaUusYlesanne.addEventListener('paste', syndmus);

// input
lisaUusYlesanne.addEventListener('input', syndmus);

function syndmus(e){
    // logi sündmuse tüüp
    console.log(`Sündmuse tüüp: ${e.type}`);
    // kontrollime vormi kaudu saadetud väärtus
    console.log(lisaUusYlesanne.value);
    // väljastame ülesanne HTMLis
    text.innerText = lisaUusYlesanne.value;
    
}