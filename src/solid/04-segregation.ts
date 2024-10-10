

interface Bird {
    eat():void;
  
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird{
    swim(): void;
}


class Tucan implements Bird, FlyingBird{

    public fly(){ }
    public eat(){ }
}

class Humminbird implements Bird, FlyingBird{
    
 
    public fly(){ }
    public eat(){ }
  
}

class Ostrich implements Bird, RunningBird {
    public eat(){ }
    public run(){ } 
} 

class Penguin implements Bird, SwimmerBird{
    public eat(){ }
    public swim(){ }
}


/*

Principio de Segregación de interface: 

Si hacemos algún tipo de cambio en alguna interface 
solo afecta a las clases que tocan a esa interfaz 
no deben ser obligados por implementación o por padre 
a usar propiedades o métodos  que no neceseitan o no usan

por ejemplo en el caso de volar de la avestruz 
esto hara mi codigo vulnerable al cambio 

*/


/*
Cómo detectar violaciones a ISP ? 

Si las interfaces que diseñamos nos obligan 
a violar principios de responsabilidad unica
y sustitución de Liskov

*/