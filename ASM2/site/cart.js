const cart = localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')):[];
console.log(cart);
cart.forEach((element, index) => {
    document.querySelector('tbody').innerHTML +=`
        <tr>
            <td>${index +1}</td>
            <td>${element.name}</td>
            <td><img src="${element.image}" width="50" height="50"></td>
            <td>${element.price}</td>
            <td>
                <button class="sub" data-id="${element.id}"> - </button>
                <span> ${element.qty} </span>
                <button class="plus" data-id="${element.id}"> + </button>
            </td>
            <td>${element.qty*element.price}</td>
            <td>
                <button class="btn btn-danger" data-id ="${element.id}">X</button>
            </td>
        </tr>
    `;
});

//tổng
let sum = 0;
cart.forEach(element => {
    sum +=element.price * element.qty;
});
document.getElementById('sum').innerHTML ='Tổng tiền:'+sum;

//xóa 
document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-danger')){
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const index = cart.findIndex(element => element.id == id);
        cart.splice(index,1);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();
    }
})

// tăng qty
document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('plus')){
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const index = cart.findIndex(element => element.id == id);
        cart[index].qty +=1;
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();
    }
})

document.addEventListener('click', (e) =>{
    if(e.target.classList.contains('sub')){
        const id = e.target.getAttribute('data-id');
        console.log(id);
        const index = cart.findIndex(element => element.id == id);
        if(cart[index].qty >1){
            cart[index].qty -=1;
        }else{
            cart.splice(index,1)
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.reload();
    }
})