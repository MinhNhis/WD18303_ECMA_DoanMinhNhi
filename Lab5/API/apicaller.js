export class APICaller{
    constructor(){
        this.baseUrl= 'http://localhost:3000/'
    }
    get(endpoint) {
        return fetch(this.baseUrl+endpoint)
            .then((reponse)=>reponse.json())
            .then((data)=>{
                return data
            })
    }

}
