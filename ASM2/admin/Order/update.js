import { APICaller } from "../API/api.js";

export let UpdateOrder= ()=>{
    const updateorder = document.querySelector("#UpdateOrder");
    document.querySelector('#tableOrder').addEventListener("click", function(e){
        if(e.target.classList.contains('btn-primary')){
            const id= e.target.dataset.id;
            APICaller.getOrderById(id).then(order =>{
                updateorder.innerHTML += `          
                <div class="mb-3">
                  <label class="form-label"><strong>Tên khách hàng</strong></label>
                  <input type="text" class="form-control" id="customer_name" aria-describedby="" value="${order.customer_name}">                                    
                </div>
                <div class="mb-3">
                  <label class="form-label"><strong>Địa chỉ</strong></label>
                  <input type="text" class="form-control" id="customer_address" aria-describedby="" value="${order.customer_address}">                                    
                </div>
                <div class="mb-3">
                  <label class="form-label"><strong>Email</strong></label>
                  <input type="email" class="form-control" id="customer_email" aria-describedby="" value="${order.customer_email}">                                    
                </div>
                <div class="mb-3">
                  <label class="form-label"><strong>SĐT</strong></label>
                  <input type="number" class="form-control" id="customer_phone_number" aria-describedby="" value="${order.customer_phone_number}">                                    
                </div>
                <div class="mb-3">
                  <label class="form-label"><strong>Ngày đặt</strong></label>
                  <input type="text" class="form-control" id="created_date" aria-describedby="" value="${order.created_date}">                                    
                </div>
                <div class="mb-3">
                  <label class="form-label"><strong>Trạng thái</strong></label>
                  <input type="text" class="form-control" id="status" aria-describedby="" value="${order.status}">                                    
                </div>
                <div class="mb-3">
                    <button id="Updateorder" type="submit" class="btn btn-primary" data-id="${id}">Sửa</button>
                </div>
                `;
            });
        }
    });
    updateorder.addEventListener("click", function(e) {
        if (e.target.classList.contains('btn-primary')) {
          const id = e.target.dataset.id;
          const customer_name = document.querySelector('#customer_name').value;
          const customer_address = document.querySelector('#customer_address').value;
          const customer_email = document.querySelector('#customer_email').value;
          const customer_phone_number = document.querySelector('#customer_phone_number').value;
          const created_date = document.querySelector('#created_date').value;
          const status = document.querySelector('#status').value;
      
          console.log(customer_name);
      
          const order = {
            'id': id,
            'customer_name': customer_name,
            'customer_address': customer_address,
            'customer_email': customer_email,
            'customer_phone_number': customer_phone_number,
            'created_date': created_date,
            'status': status,
          };
      
          APICaller.updateOrder(id, order);
        }
      });
}
   
