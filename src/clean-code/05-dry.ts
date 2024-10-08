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
        public name: string ='',
        public price: number = 0,
        public size: Size = '' ,
    ){}


    toString(){
        // NO SE APLICA dry en este caso si cada vez que se agrega
        // una nueva propiedad se debe duplicar el codigo 
        if(this.name.length <= 0) throw new Error('Name is empty'); 
        if(this.price <= 0) throw new Error('price is 0'); 
        if(this.size.length <= 0) throw new Error('size is empty');            
        

        return `${this.name} (${this.price}, ${this.size})`;
    }
}

(()=> {
    const bluePants = new Product('blue pants', 10, 'XL');
    console.log(bluePants.toString())
})();
