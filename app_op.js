
// kirjeldame andmete lugemise sündmust LS-s
document.addEventListener('DOMContentLoaded', raamatuteTabel);


// kasutaja liides

// raamatute tabeli funktsioon
function raamatuteTabel(e){
    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();
    // kutsume raamatute näitamiseks funktsiooni
    kl.naitaRaamatud();
}

document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const autor = document.getElementById('autor').value;
    const isbn = document.getElementById('isbn').value;
    // loome raamat andmete põhjal
    const raamat = new Raamat(pealkiri, autor, isbn);
    console.log(raamat);

    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();

    // kui mingid andmed on puudu siis anname märku
    if(pealkiri === '' | autor === '' | isbn === ''){
        kl.teade('Tuleb täita kõik väljad!', 'invalid');
        console.log(kl)
    } else {
        // lisame sisestatud raamat tabelisse
         kl.lisaRaamatTabelisse(raamat);

        // loome LS objekt funktsionaali kutsumiseks
        const ls = new LS();
         // salvestame raamatu local storage-sse
         ls.salvestaRaamat(raamat);

         // anname teate lisamisest
         kl.teade('Raamat on lisatud!', 'valid')
    }

    

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();

    e.preventDefault();
}

// raamatu kustutamise syndmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);
function kustutaRaamat(e){
    // loome kasutajaliidese objekti temaga opereerimiseks
    const kl = new KL();

    
    // kutsume tabelis oleva raamatu kustutamise funktsioon
    // loome X link millel klikime kustutamiseks
    const X = e.target;
    // saame kustutava raamatu isbn kätte
    isbn = X.parentElement.previousElementSibling.textContent;
    // kustutame andmed tabeli väljundist
    kl.kustutaRaamatTabelist(X);

    // loome LS objekt funktsionaali kutsumiseks
    const ls = new LS();
    // kustutame andmed local storage-st
    onKustutatud = ls.kustutaRaamatLS(isbn);
    // väljastame vastava teate
    if(onKustutatud){
        kl.teade('Raamat on kustutatud', 'valid');}

        e.preventDefault();
}