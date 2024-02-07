import { APICaller } from "../API/api.js";

export let DeleteCategory = ()=>{
    document.querySelector('#tableCate').addEventListener("click", function(e){
        if(e.target.classList.contains('btn-danger')){
            const id= e.target.dataset.id;
            console.log(id);
            APICaller.DeleteCate(id)
        }
    })
}
    
