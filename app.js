// inimese kirjeldus OOP abil
// inimese konstruktor

function Isik(e, p, skp){
    this.eesnimi = e;
    this.perenimi = p;
    this.synnikuupaev = new Date(skp);

    // väljasta täisnimi
    this.taisNimi =function(){
        return `${this.eesnimi} ${this.perenimi}`
    }
    // arvuta vanus
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

const anna = new Isik('Anna', 'Manna', '05-05-1995');
const kadi = new Isik('Kadi', 'Padi', '03-03-1993');
console.log(anna.taisNimi());
console.log(kadi.taisNimi());