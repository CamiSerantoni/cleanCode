(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    

    //Product service sea solo encargado de ese tipo de acciones asociadas
    // al producto,  
    class ProductService {

        //petición http 
        private httpAdapter: Object; 

        getProduct (id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    } 

    class Mailer {
        private masterEmail: string = 'example@example.com';

        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

     
    
    
    class ProductBloc {
   
        private productService: ProductService;
        private mailer: Mailer; 

        constructor(productService: ProductService, mailer: Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }


        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct( id );
            
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct( product );
        }  

        notifyClients(){
            this.mailer.sendEmail(['example@example.com'], 'to-clients');
        }
    
    }

    class CartBloc {

        private itemsCart: Object[] = []; 

        addToCart( productId: number ) {
            console.log('Agregando al carrito ', productId );
        }


    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);








})();

/*  Las funciones trabajan más rapido que lass clases en Js

Si bien los principios solid estan más orientados a la POO es decir en clases, 
es validos para aplicar a los pryectos de JS o nuestros proyectos

Si bien no es el unico camino seguir estas recomendaciones 
considerando el principio de responsabilidad unica: 
es decir una tarea y hacerla bien 
*/

/*   Detectar violaciones: 

- nombres de clases y módulos demasiado genéricos 
- cambios en el código suelen afectar a la clase o módulo 
- la clase involucra multiples capas 
- número elevado de importaciones 
- cantidad elevada de métodos públicos
- excesivo número de lídeas de código
 




*/