// storage

// salvestame väärtus
// localStorage.setItem('eesnimi', 'Georg');
// localStorage.setItem('perenimi', 'Luik')

// väärtuste eemaldamine

// localStorage.removeItem('perenimi');

// väärtuste lugemine
// onst eesnimi = localStorage.getItem('eesnimi');
// console.log(eesnimi);

// eemalda kõik väärtused
// localStorage.clear();

document.querySelector('form').addEventListener('submit', salvesta);

function salvesta(e){
    const uusYlesanne = document.getElementById('task').value;
    // localStorage.setItem('tasks', uusYlesanne);
    
    let ylesanded;
    if(localStorage.getItem('tasks') === null){
        ylesanded = [];
        // console.log(ylesanded);
    } else {
        ylesanded = JSON.parse(localStorage.getItem('tasks'));
    }
    console.log(ylesanded);
    ylesanded.push(uusYlesanne);
    console.log('ülesanne lisatud')
    localStorage.setItem('tasks', JSON.stringify(ylesanded));

    e.preventDefault();
}

// loeme sisestatud ülesanded
const ylesanded = JSON.parse(localStorage.getItem('tasks'));
ylesanded.forEach(ylesanne => {
    console.log(ylesanne);
});