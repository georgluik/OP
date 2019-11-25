// inimese kirjeldus OOP abil
// klasside pärilus

class Isik {
    // konstruktor 
    constructor(e, p){
        this.eesnimi = e;
        this.perenimi = p;
    }
    // tervitus meetod
    tervitus(){
        return `Tere, ${this.eesnimi} ${this.perenimi}!`;
    }
}

// kliendi klass
class Klient extends Isik{
    constructor(e, p, t, s){
    super(e, p);
    this.telefon = p;
    this.staatus = s;
    }

    // staatiline meetod
    static kuutasu(){
        return 5;
    }
}

const kadi = new Klient('Kadi', 'Padi', '1234 1234', 'KULD');
console.log(kadi.tervitus());
console.log(Klient.kuutasu());

