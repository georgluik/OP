// inimese kirjeldus OOP abil
// klasside kasutus

class Isik {
    // konstruktor 
    constructor(e, p, skp){
        this.eesnimi = e;
        this.perenimi = p;
        this.synnikuupaev = new Date(skp);
    }
    // tervitus meetod
    tervitus(){
        return `Tere, ${this.eesnimi} ${this.perenimi}!`;
    }
    // vanuse arvutamise meetod
    arvutaVanus(){
        const vahe = Date.now() - this.synnikuupaev.getTime();
        const vanus = new Date(vahe);
        return vanus.getUTCFullYear() -1970;
    }

    // abiellus - uus perenimi
    abiellus = function(uusPereNimi){
        this.perenimi = uusPereNimi;
    }
}

const kadi = new Isik('Kadi', 'Padi', '10-10-1990');

kadi.abiellus('Vaher');

console.log(kadi.tervitus(), kadi.arvutaVanus())