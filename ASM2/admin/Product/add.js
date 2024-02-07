import { APICaller } from "../API/api.js";

    document.querySelector('#AddProduct').onclick = ()=>{
        const name = document.querySelector('#name').value;
        const price = document.querySelector('#price').value
        const category = document.querySelector('#category').value
        let hotdeal = document.querySelector('#hotdeal').checked
        const image = document.querySelector('#image').value.split('\\').pop();
        console.log(name+price+category+hotdeal+image);
        APICaller.getlastIdPro().then(id =>{
            const pro ={
                'id': id + 1,
                'name': name,
                'price': price, 
                'category': category,
                'detail':1,
                'hotdeal': hotdeal==true ? 1:0,
                'image': "../../site/img/"+ image
            }
            APICaller.addPro(pro)
        })
    }
