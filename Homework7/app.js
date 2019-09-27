function* generatorCreator() {
    const response = yield fetch('http://www.nbrb.by/API/ExRates/Rates?Periodicity=0');
    const data = yield response.json();
    console.log(data);
}

async = () => {
    const generator = generatorCreator();

    function next(value) {
        const nextResult = generator.next(value);
        if (nextResult.done) {
            return nextResult.value;
        }
        nextResult.value.then(next);
        nextResult.value.catch( ()=> console.log("error"));
    };

    next();
}

async ();