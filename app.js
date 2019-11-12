// document meetodid
// single element selectors

sisu = document.getElementById('add-task'); // html sisu
id = document.getElementById('add-task').id; // id 
klass = document.getElementById('add-task').className; 

// stiili muutmine 

sisu.style.background = '#333';
sisu.style.color = '#fff';
sisu.style.padding = '5px';


// sisu muutmine
sisu.textContent = 'Minu Ülesanded';
sisu.innerText = 'Just minu ülesanded';
sisu.innerHTML = '<span style="color:green">Vabad ülesanded</span>';
console.log(sisu);


