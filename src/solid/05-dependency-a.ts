import { PostService } from './05-dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

//  const provider = new LocalDataBaseService()
// const provider = new JsonDataBaseService()
    const provider = new WebApiPostService()

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();


/* Principio de inversion de dependecias habla
de basarnos en abstracciones que son las abtracciones? 
trabajar con clases abstractas y que esas clases abstractas 
 sean con las que vamos a trabajar 
 en los lugares donde vamos a necesitar

*/


/*Con solo estos cambios  
se aplica el principio de sustitución de Liskop yendo del local al database
linea 8-9  que dice que nosotros podriamos reemplazar cualquier clase 
por una que implemente o extienda de otra clase 

- Estamos aplicando pprio de open and close:
por que  nuestras clases estan abiertas a la expansion
pero cerradas a la modificación. 
- esto hace además la modificación más sencilla 

*/