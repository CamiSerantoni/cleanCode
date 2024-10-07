(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    /* Si tenemmos la necesidad de comentar x código es por que no esta suficientemente claro */
    
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    /* f.f   es muy dificil de leer semanticamente*/

    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesIndirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClasesPerStudent = 6;


})();

/* La idea es colocar el nombre según el tipo  de dato */

// bad names: no se entiende el proposito del nombre sin contexto  
const fruits= 3; 
const cars= 10;

// mejores nombres son:
const maxFruit = 5;
const totalFruits = 8;
const minFruits= 1;
const totalOfCars = 4;

/*  Nombres de funciones:  deben de representar acciones 
que por lo general se contruye por el verbo y un sustantivo 
 
Tiene que ser: descriptivo y conciso -> debe expresar lo que hace
Debe de abstenerse de:  toda la implementación que hace la función

evitar por ejemplo: 
- createUserIfNotExists()
- updateUserIfNotEmpty()
-sendEmailIfFieldsValid()

lo que tiene relación con el principio de responsabilidad unica
el que se reduce a que cada acción debe hacer una tarea y hacerla
bien
mejor opción: 
- createUSer()
- updateUser()
- sendEmail()


*/
