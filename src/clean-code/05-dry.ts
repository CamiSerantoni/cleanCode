/*
Principio DRY (Don't Repeat Yourself)

-simplemente es evitar tener duplicidad en nuestro código 
- Simplifica las pruebas 
- Evita la repetición de código
- Ayuda a centralizar los procesos 
- Aplicar el principio DRY usualmente lleva a refactorizar el código
*/

type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {



    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',

    ) { }

    isProductReady(): boolean {
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw Error(`${key} is Zero`);

                    break
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }



        } return true;


    }
    /* <string><unknown>  a esto se le llama casteonismo de tipado 
        
        lo que quiere decir le decirmos "tratalo como si fuera... "
        para que funcione con ts y no nos de error
        */

    toString() {


        // NO SE APLICA dry en este caso si cada vez que se agrega
        // una nueva propiedad se debe duplicar el codigo 
        // if(this.name.length <= 0) throw new Error('Name is empty'); 
        // if(this.price <= 0) throw new Error('price is 0'); 
        // if(this.size.length <= 0) throw new Error('size is empty');            

        if (!this.isProductReady) return

        return `${this.name} (${this.price}, ${this.size})`;
    }
}

(() => {
    const bluePants = new Product('Blue large pants', 10, 'M');
    console.log(bluePants.toString())
})();
