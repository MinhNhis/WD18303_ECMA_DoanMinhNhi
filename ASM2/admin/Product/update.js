import { APICaller } from "../API/api.js";

export let Update= ()=>{
    const updateProduct = document.querySelector("#UpdateProduct");
    document.querySelector('#datatablesSimple').addEventListener("click", function(e){
        if(e.target.classList.contains('btn-primary')){
            const id= e.target.dataset.id;
            APICaller.getProById(id).then(pro =>{
                updateProduct.innerHTML += `          
                <div class="mb-3">
                  <label class="form-label"><strong>Tên sản phẩm</strong></label>
                  <input type="text" class="form-control" id="name" aria-describedby="" value="${pro.name}">                                    
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label"><strong>Giá</strong></label>
                  <input type="number" class="form-control" id="price" value="${pro.price}">
                </div>
                
                <div class="mb-3">
                    <label class="form-label"><strong>Loại hàng</strong></label>
                    <select class="form-control" name="" id="category">
                        <option ${pro.category === "Thức Ăn Cho Mèo" ? "selected" : ""} value="Thức Ăn Cho Mèo">Thức Ăn Cho Mèo</option>
                        <option ${pro.category === "Thức Ăn Cho Chó" ? "selected" : ""} value="Thức Ăn Cho Chó">Thức Ăn Cho Chó</option>
                    </select>                                   
                </div> 
    
                <div class="mb-3">
                    <label class="form-label"><strong>Hotdeal</strong></label>
                    <div>
                        <input ${pro.hotdeal === "1" ? "checked" : ""} class="form-check-input" type="radio" id="hotdeal1">
                        <label class="form-check-label" for="hotdeal1">
                            Có
                        </label>
                        <input ${pro.hotdeal === "0" ? "checked" : ""} class="form-check-input" type="radio" id="hotdeal2">
                        <label class="form-check-label" for="hotdeal2">
                            Không
                        </label>
                    </div>
                </div>
    
                <div class="mb-3">
                    <label class="form-label"><strong>Ảnh</strong></label>
                    <img id="ShowImage" src="../../site/img/${pro.image}" width="50" height="50">
                    <input type="file" class="form-control" id="image" aria-describedby="emailHelp">                                    
                </div>
                <div class="mb-3">
                    <button id="UpdateProduct" type="submit" class="btn btn-primary" data-id="${id}">Sửa</button>
                </div>
                `;
            });
        }
    });
    updateProduct.addEventListener("click", function(e){
        if(e.target.classList.contains('btn-primary')){
            const id= e.target.dataset.id;
            const name = document.querySelector('#name').value;
            const price = document.querySelector('#price').value;
            const category = document.querySelector('#category').value;
            let hotdeal = document.querySelector('#hotdeal1').checked ? 1 : 0;
            let image = document.querySelector('#image').value.split('\\').pop();
            if(image === ""){
                image = document.querySelector("#ShowImage").src.split("/").pop()
            }
            console.log(name + price + category + hotdeal + image);
            const pro = {
                'id': id,
                'name': name,
                'price': price,
                'category': category,
                'detail': 1,
                'hotdeal': hotdeal,
                'image': "../../site/img/" + image
            };
            APICaller.updatePro(id, pro);
        }
    });   
}
   
