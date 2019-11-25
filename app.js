// raamatu konstruktor

function Raamat(p, a, i){
    this.pealkiri = p;
    this.autor = a;
    this.isbn = i;
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

    e.preventDefault();
}