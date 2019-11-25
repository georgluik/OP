// inimese kirjeldus

let eesnimi, perenimi;

let vanus;

function taisNimi(eesnimi, perenimi){
    return `${eesnimi} ${perenimi}`;
}

function arvutaVanus(synnikuupaev){
    synnikuupaev = new Date(synnikuupaev);
    vaheSekundites = Date.now() -
    synnikuupaev.getTime();
    vanusDate = new Date(vaheSekundites);
    aastaDate = vanusDate.getUTCFullYear();
    vanus = aastaDate - 1970;
    return `vanus: ${vanus}`;
}

console.log(taisNimi("Georg", "Luik"));

console.log(arvutaVanus("1992-04-10"))