(() => {

    
    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

   
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película


    interface Movie{
       cast:   string[] 
       title:  string;
       description: string;
       rating:      number;
        
    }

    function createMovie( {title, description, rating, cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }



    function checkFullName( fullName: string ): boolean {
      console.log({fullName});
      return true;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName( fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

// Si trabajamos con typescript es bueno trabajar con los tipos de datos

const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    let result;
    if ( isDead ) {
        result = 1500;
    } else {
        if ( isSeparated ) {
            result = 2500;
        } else {
            if ( isRetired ) {
                result = 3000;
            } else {
                result = 4000; 
            }
        }
    }
    
    return result;
}

// facilita la lectura 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

    if ( isDead ) return 1500;
    
    if(isSeparated) return 2500;

    return (isRetired) ? 3000 : 4000;

        
    }
    


})();

/*   Funciones: 
- la simplicidad es fundamental 
- De tamaño reducido(si bes muy grande es que hace 
más de lo que debería)
- funciones de una sola línea sin causar complejidad
- menos de 20 líneas de código, cuando se ven funciones muy grandes
 la idea es delegar responsabilidades a otras funciones
 - la simplicidad es fundamental 
 - evita el uso del else, al menos que sea estrictamente necesario 

- prioriza el uso de la condicional ternaria 
- el uso de parentesis es recomendado para evitar confusiones

*/