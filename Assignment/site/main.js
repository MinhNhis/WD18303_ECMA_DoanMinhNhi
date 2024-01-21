const API_URL = "../db.json"

fetch(API_URL)
  .then((response) => response.json())
    .then((data) => {
        const pro_starters = data.products.filter(
            (item) => item.hotdeal === 1
        );
    const product_hotdeal = document.querySelector("#tab-1");
    pro_starters.forEach((item) => {
      product_hotdeal.innerHTML += `
        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="product-item">
                <div class="position-relative bg-light overflow-hidden">
                    <img class="img-fluid w-100" src="${item.image}" alt="">
                </div>
                <div class="text-center p-4">
                    <a class="d-block h5 mb-2" href="">${item.name}</a>
                    <span class="text-primary me-1">${currency(item.price, {symbol: "", separator: '.', decimal: ","}).format()}đ</span>
                    <span class="text-body text-decoration-line-through"></span>
                </div>
                <div class="d-flex border-top">
                    <small class="w-50 text-center border-end py-2">
                        <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                    </small>
                    <small class="w-50 text-center py-2">
                        <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                    </small>
                </div>
            </div>
        </div> 
        `;
    });

  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });


// Sản phẩm
fetch(API_URL)
  .then((response) => response.json())
    .then((data) => {
        const product_sta = data.products;
        const product = document.querySelector("#product");
            product_sta.forEach((item) => {
                product.innerHTML += `
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="product-item">
                        <div class="position-relative bg-light overflow-hidden">
                            <img class="img-fluid w-100" src="${item.image}" alt="">
                        </div>
                        <div class="text-center p-4">
                            <a class="d-block h5 mb-2" href="">${item.name}</a>
                            <span class="text-primary me-1">${currency(item.price, {symbol: "", separator: '.', decimal: ","}).format()}đ</span>
                            <span class="text-body text-decoration-line-through"></span>
                        </div>
                        <div class="d-flex border-top">
                            <small class="w-50 text-center border-end py-2">
                                <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                            </small>
                            <small class="w-50 text-center py-2">
                                <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                            </small>
                        </div>
                    </div>
                </div> 
                `;
            });
    })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });