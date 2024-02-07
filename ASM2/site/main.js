import {APICaller} from '../admin/API/api.js'

APICaller.get().then(data =>{
    let pro_starters = data.filter(
        (item) => item.hotdeal === 1
    );
    console.log(pro_starters);
    let product_hotdeal = document.querySelector("#tab-1");
    pro_starters.forEach((item) => {
    product_hotdeal.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
                <div class="position-relative bg-light overflow-hidden">
                    <img class="img-fluid w-100" src="${item.image}" alt="">
                </div>
                <div class="text-center p-4">
                    <a class="d-block h6 mb-2" href="">${item.name}</a>
                    <span class="text-primary me-1">${currency(item.price, {symbol: "", separator: '.', decimal: ","}).format()}đ</span>
                    <span class="text-body text-decoration-line-through"></span>
                </div>
                <div class="d-flex border-top">
                    <small class="w-100 text-center py-2">
                        <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i><button class="btn btn-primary" data-id="${item.id}">Thêm giỏ hàng</button></a>
                    </small>
                </div>
            </div>
        </div> 
        `;
    });
})

//Sản phẩm
APICaller.get().then(data =>{
    let product_sta = data;
    let productt = document.querySelector("#product");
        product_sta.forEach((item) => {
            productt.innerHTML += `
            <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                        <img class="img-fluid w-100" src="${item.image}" alt="">
                    </div>
                    <div class="text-center p-4">
                        <a class="d-block h6 mb-2" href="">${item.name}</a>
                        <span class="text-primary me-1">${currency(item.price, {symbol: "", separator: '.', decimal: ","}).format()}đ</span>
                        <span class="text-body text-decoration-line-through"></span>
                    </div>
                    <div class="d-flex border-top">
                        <small class="w-100 text-center py-2">
                            <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i><button class="btn btn-primary" data-id="${item.id}">Thêm giỏ hàng</button></a>
                        </small>
                    </div>
                </div>
            </div> 
            `;
        });
})

document.addEventListener('click', async(e) => {
    if (e.target.classList.contains('btn-primary')) {
      const id = e.target.getAttribute('data-id');
      console.log(id);
      const product = APICaller.getProById(id);
      console.log(product);
      //kiểm tra có cart trong local ko 
      let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const index = cart.findIndex(item => item.id == product.id);
      if (index == -1) {
        product.qty = 1;
        cart.push(product);
      } else {
        cart[index].qty += 1;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log(JSON.parse(localStorage.getItem('cart')));
    }
  });

