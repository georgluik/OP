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
    tabel = document.getElementById('book-list');
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
        tabeliRida = kustutaElement.parentElement.parentElement;
        tabeliRida.remove();
        return true;
    }
}


}