// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);

    // väljasta täisnimi  / prototype puhul kustuta
    this.taisNimi =function(){
        return `${this.eesnimi} ${this.perenimi}`
    }
    // arvuta vanus  / prototype puhul kustuta
    this.arvutaVanus = function(){
        const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
        const vanusDateKujul = new Date(vaheSekundites);
        const taisAasta = vanusDateKujul.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    }
}
// objekt.prototype 
/* Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

Isik.prototype.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synnikuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
} */
Isik.prototype.abiellus = function(uusPereNimi){
    this.perenimi = uusPereNimi;
}
const anna = new Isik('Anna', 'Manna', '05-05-1995');
const kadi = new Isik('Kadi', 'Padi', '03-03-1993');
console.log(anna.taisNimi());

kadi.abiellus('Vaher');
console.log(kadi.taisNimi());