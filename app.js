// raamatu konstruktor

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
}

// kasutajaliidese(KL) konstruktor
function KL(){

}

// local storage(LS) konstruktor
function LS(){

}

// KL funktsionaal
// sisendväljade puhastamine
KL.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('isbn').value = '';
}
// raamatu lisamine
KL.prototype.lisaRaamatTabelisse = function(r){
    // loome tabeli rida
    const rida = document.createElement('tr');
    // täidame rida tabeli andmetega
    rida.innerHTML = `<td>${r.pealkiri}</td>
                      <td>${r.autor}</td>
                      <td>${r.isbn}</td>
                      <td><a href="#" class="kustuta">X</a></td>
    `;
    // lisame rida tabelisse
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// raamatu kustutamine tabelist
KL.prototype.kustutaRaamatTabelist = function(kustutaElement){
    if(kustutaElement.className === 'kustuta'){
        tabeliRida = kustutaElement.parentElement.parentElement;
        tabeliRida.remove();
        return true;
    }
};

// teate väljastamine
KL.prototype.teade = function(s, stiil){
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

// LS funktsionaal
// raamatute lugemine LS-st
LS.prototype.loeRaamatud = function(){
    // loome raamatute hoidla local storages 
    let raamatud;
    // kui raamatuid veel LSis ei eksisteeri 
    if(localStorage.getItem('raamatud') === null){
        raamatud = [];
    } else {
        // kui raamatud LSis olemas, saame need kätte
        raamatud = JSON.parse(localStorage.getItem('raamatud'));
    }
    return raamatud;
}

// raamatu salvestamine local storage-sse
LS.prototype.salvestaRaamat = function(r){
    // tekitame raamatute massiiv
    const raamatud = this.loeRaamatud();
    // lükkame uue raamatu massiivi
    raamatud.push(r);
    // lisame andmed LS-sse
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    console.log(raamatud);
}

// salvestatud raamatute näitamine
KL.prototype.naitaRaamatud = function(){
    // loome LS objekt funktsionaali kutsumiseks
    const ls = new LS();
    // vaatame millised raamatud on olemas
    const raamatud = ls.loeRaamatud();
    raamatud.forEach(function(raamat){
        // loeme andmed LS-st ühekaupa ja teisendame raamat objektiks
        const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
        // loome kl objekt väljastamiseks
        kl = new KL();
        // väljastame tabeli rida
        kl.lisaRaamatTabelisse(r);
    });
}

LS.prototype.kustutaRaamatLS = function(isbn){
    // vaatame millised raamatud on olemas
    const raamatud =  this.loeRaamatud();
    raamatud.forEach(function(raamat, index){
        // loeme andmed LS-st
        if(raamat.isbn === isbn){
            raamatud.splice(index, 1)
        }
    });
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    return true;
}

// kirjeldame andmete lugemise sündmust LS-s
document.addEventListener('DOMContentLoaded', raamatuteTabel);

// raamatute tabeli funktsioon
function raamatuteTabel(e){
    // loome kasutajaliidese objekt temaga opereerimiseks
    const kl = new KL();
    // kutsume raamatute näitamiseks funktsiooni
    kl.naitaRaamatud();
}

// kirjeldame raamatu lisamise sündmust
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
