// raamat

class Raamat{
    constructor(p, a, i){
        this.pealkiri = p;
        this.autor = a;
        this.isbn = i
    }
   
};

// kasutaja liides

class KL{
    // puhastaSisend()
    puhastaSisend(){
        document.getElementById('title').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('isbn').value = '';
    }


lisaRaamatTabelisse(r){
    // loome tabeli rida
    const rida = document.createElement('tr');
    // täidame rida tabeli andmetega
    rida.innerHTML = `<td>${r.pealkiri}</td>
                      <td>${r.autor}</td>
                      <td>${r.isbn}</td>
                      <td><a href="#" class="kustuta">X</a></td>
    `;
    // lisame rida tabelisse
    const tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// teade
teade(s, stiil){
    // loome div kuhu lisada teate sõnum

    const div = document.createElement('div');
    div.className = `alert ${stiil}`;
    // lisame sõnumi tekst divi sisse
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    // leiame elemendid mille suhtes tuleb lisada uus element
    const konteiner = document.querySelector('.container');
    console.log(konteiner);
    const vorm = document.getElementById('book-form');
    // lisame teade dokumendi
    konteiner.insertBefore(div, vorm);

    // kustutame teade 5 sekundi möödumisel
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 5000);
}

// kustutamine
kustutaRaamatTabelist(kustutaElement){
    if(kustutaElement.className === 'kustuta'){
        const tabeliRida = kustutaElement.parentElement.parentElement;
        tabeliRida.remove();
        return true;
    }
}


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
        // const ls = new LS();
         // salvestame raamatu local storage-sse
         // ls.salvestaRaamat(raamat);

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
    // const ls = new LS();
    // kustutame andmed local storage-st
    // onKustutatud = ls.kustutaRaamatLS(isbn);
    // väljastame vastava teate
    if(onKustutatud){
        kl.teade('Raamat on kustutatud', 'valid');}

        e.preventDefault();
}