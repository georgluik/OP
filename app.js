// inimese kirjeldus OOP abil
// prototüüpide pärilus
// isiku konstruktor

function Isik(e, p){
    this.eesnimi = e;
    this.perenimi = p;
}

Isik.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi}`;
}

// kliendi konstruktor
function Klient(e, p, t, s){
    Isik.call(this, e, p); // konstruktori kasutamine
    this.telefon = t;
    this.staatus = s;
}

// teiste meetodite/funktsioonide kasutamine
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame taisnimi funktsioon Klient objektile
Klient.prototype.taisNimi = function(){
    return `${this.eesnimi} ${this.perenimi} - sinul on ${this.staatus} tase`;
}

const kadi = new Klient('Kadi', 'Padi', '1234 1234', 'kuld');
console.log(kadi.taisNimi())
