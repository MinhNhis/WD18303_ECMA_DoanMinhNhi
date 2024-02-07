import { APICaller } from "../API/api.js";

export let UpdateCate= ()=>{
    const updateCate = document.querySelector("#UpdateCate");
    document.querySelector('#tableCate').addEventListener("click", function(e){
        if(e.target.classList.contains('btn-primary')){
            const id= e.target.dataset.id;
            APICaller.getCateById(id).then(cate =>{
                updateCate.innerHTML += `          
                <div class="mb-3">
                  <label class="form-label"><strong>Tên loại</strong></label>
                  <input type="text" class="form-control" id="name" aria-describedby="" value="${cate.name}">                                    
                </div>
                <div class="mb-3">
                    <button id="UpdateCate" type="submit" class="btn btn-primary" data-id="${id}">Sửa</button>
                </div>
                `;
            });
        }
    });
    updateCate.addEventListener("click", function(e){
        if(e.target.classList.contains('btn-primary')){
            const id= e.target.dataset.id;
            const name = document.querySelector('#name').value;
            console.log(name);
            const cate = {
                'id': id,
                'name': name,
            };
            APICaller.updateCate(id, cate);
        }
    });   
}
   
