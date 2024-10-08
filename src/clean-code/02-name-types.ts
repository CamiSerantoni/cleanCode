(() => {

    
    const temperaturesCelcius = [33.6, 12.34];

    
    const serverIp = '123.123.123.123';

  
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

  
    const userEmails = users.map( user => user.email );

  
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;


    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones

    function getBooks() {
        throw new Error('Function not implemented.');
    }


    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
  
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    
/*   No es que haya que satanizar los comentarios,
 pero para que el código o el
nombre de una variable tenga sentido, 
no  debiese ser la norma, sino que la excepción

*/ 



})();


/* Los nombres de las funciones deben describir exactamente lo que hace
la misma

Parámetros -> cuando definimos la función se les llama parámetros
Argumentos->  cuando usamos esa función mandamos argumentos 


- si bien no hay limites en la cantidad,
 se recomienda que se limiten a 3 parametros posicionales
 3 o 1 
-ordenar las propiedades de manera afabética,  no es obligación 
pero sí una recomendación 


 

*/