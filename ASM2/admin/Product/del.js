import { APICaller } from "../API/api.js";

export let Delete = ()=>{
    document.querySelector('#datatablesSimple').addEventListener("click", function(e){
        if(e.target.classList.contains('btn-danger')){
            const id= e.target.dataset.id;
            console.log(id);
            APICaller.Delete(id)
        }
    })
}
    
