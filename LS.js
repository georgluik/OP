class LS {
    loeRaamatud(){
        // loome raamatute hoidla local storages 
    let raamatud;
    // kui raamatuid veel LSis ei eksisteeri 
    if(localStorage.getItem('raamatud') === null){
        raamatud = [];
    } else {
        // kui raamatud LSis olemas, saame need kätte
        raamatud = JSON.parse(localStorage.getItem('raamatud'));
    }
    return raamatud;
    }   

    salvestaRaamat(r){
        // tekitame raamatute massiiv
    const raamatud = this.loeRaamatud();
    // lükkame uue raamatu massiivi
    raamatud.push(r);
    // lisame andmed LS-sse
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    console.log(raamatud);
    }

    kustutaRaamatLS(isbn){
        // vaatame millised raamatud on olemas
    const raamatud =  this.loeRaamatud();
    raamatud.forEach(function(raamat, index){
        // loeme andmed LS-st
        if(raamat.isbn === isbn){
            raamatud.splice(index, 1)
        }
    });
    localStorage.setItem('raamatud', JSON.stringify(raamatud));
    return true;
    }

    naitaRaamatud(){
        // loome LS objekt funktsionaali kutsumiseks
    const ls = new LS();
    // vaatame millised raamatud on olemas
    const raamatud = ls.loeRaamatud();
    raamatud.forEach(function(raamat){
        // loeme andmed LS-st ühekaupa ja teisendame raamat objektiks
        const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
        // loome kl objekt väljastamiseks
        kl = new KL();
        // väljastame tabeli rida
        kl.lisaRaamatTabelisse(r);
    });
    }
}

