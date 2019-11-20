// sündmused

// lehe kaardi pealkiri
/*
 document.querySelector('.card-title').addEventListener('click', function(e){
    console.log('card-title');
});

// lehe kaardi sisu
document.querySelector('.card-content').addEventListener('click', function(e){
    console.log('card-content');
}); 

*/

// delegeerimine



const kustutaYlesanne = document.querySelector('.fa-remove');
kustutaYlesanne.addEventListener('click', kustuta);

function kustuta(e){
    console.log(e.target.parentElement);
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('hakkame kustutama')
    e.target.parentElement.parentElement.remove();
    }
}

