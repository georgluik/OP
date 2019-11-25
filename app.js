// raamatu konstruktor

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
}

// kasutajaliidese(KL) konstruktor
function KL(){

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
    `;
    // lisame rida tabelisse
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
}

// teate väljastamine
KL.prototype.teade = function(s){
    // loome div kuhu lisada teate sõnum

    const div = document.createElement('div');
    // lisame sõnumi tekst divi sisse
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    // leiame elemendid mille suhtes tuleb lisada uus element
    const konteiner = document.querySelector('.container');
    console.log(konteiner);
    const vorm = document.getElementById('book-form');
    // lisame teade dokumendi
    konteiner.insertBefore(div, vorm);

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
        kl.teade('Tuleb täita kõik väljad!');
        console.log(kl)
    } else {
        // lisame sisestatud raamat tabelisse
         kl.lisaRaamatTabelisse(raamat);
         kl.teade('Raamat on lisatud!')
    }

    

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();


    e.preventDefault();
}