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

    // lisame sisestatud raamat tabelisse
    kl.lisaRaamatTabelisse(raamat);

    // puhastame väljad sisestatud andmetest
    kl.puhastaSisend();


    e.preventDefault();
}