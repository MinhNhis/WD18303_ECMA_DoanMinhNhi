import { APICaller } from "../API/api.js";
document.querySelector('#addCate').onclick = () =>{
    const name = document.querySelector('#name').value;
    
    console.log(name);
    APICaller.getlastId().then(idLast =>{
        const pro ={
            'id':(Number(idLast)+1).toString,
            'name': name    
        }
    APICaller.Add(pro)
    })
}