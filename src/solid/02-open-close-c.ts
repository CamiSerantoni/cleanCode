// import axios from 'axios'






export class HttpClient {

    async get(url: string) {
        const resp = await fetch(url)
        const data = await resp.json()


        return { data, status: resp.status}
    }
}

/* 
El beneficio de utiliizar el patrón adaptador al adaptar al una librería de terceros
al usar libreria de terceros se recomienda altamente utilizar el patrón adaptador
de modo que ante cualquier cambio 
solo se realicen los cambios en ese foco no en todos los componentes o clases

*/