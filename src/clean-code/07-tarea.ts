(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes  {
        constructor(
            public value: string,
            public placeholder: string,
           
        ) {
           
        }
    }

    class InputEvents  {
        constructor( ) {

        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement


    class InputElement{

            public html: HtmlElement;
            public attributes: InputAttributes;
            public events: InputEvents;

        constructor (value:string, placeholder:string, id:string) {
           this.html = new HtmlElement(id, 'input'); 
           this.attributes = new InputAttributes(value, placeholder);
           this.events = new InputEvents();
        }      
    
    }


    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()

/* Comentarios: 
Recuerda: nuestro codigo debe ser suficientemente autoexplicativo

Pero a veces es necesario comentarlo: al usar librerias de terceros
-> el por que?  porque decidiste resolver eso de esa manera y no de otra?

en lugar del qué? - el que no es necesario 

o como ?- el qué es el código  

- evitar comentarios obvios
*/


