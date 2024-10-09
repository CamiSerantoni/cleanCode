const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();

/*  Patrón singleton 
lo que hace es garantizar que si no importa si la instancia 1 y 2 
son diferentes, siempre apuntarán al mismo espacio en memoria

- es recomendable evitarlo en nuestras aplicaciones 
*/