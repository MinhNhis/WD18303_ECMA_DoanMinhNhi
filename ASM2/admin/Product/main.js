import { Delete } from "./del.js";
import { Update } from "./update.js";
let generateTableHeader = (headerTitles) =>{
    if(!headerTitles || headerTitles.length ===0){
        return "";
    }
    let html = document.querySelector("#datatablesSimple");
    headerTitles.forEach(element => {
       html.innerHTML += `
            <th class ="text-center">${element.id}</th>
            <th class ="text-center">${element.name}</th>
            <th class ="text-center">${element.anh}</th>
            <th class ="text-center">${element.price}</th>
            <th class ="text-center">${element.act}</th>
       `;
    });
    return html;
}

let generateTableRow = (rowData) => {
    if(!rowData || rowData.length ===0){
        return "";
    }
    return `<tr>
                <td class ="text-center">${rowData.id}</td>
                <td class ="text-center">${rowData.name}</td>
                <td class ="text-center"><img src="${rowData.image}" width="50" height="50"></td>
                <td class ="text-center">${currency(rowData.price, {symbol: "", separator: '.', decimal: ","}).format()}đ</td>
                <td class ="text-center" >
                    <button type="button" class="btn btn-primary" data-id="${rowData.id}">Sửa</button>
                    <button type="button" class="btn btn-danger" data-id="${rowData.id}")>Xóa</button>
                </td>
            </tr>
            `;
}

const API_URL = " http://localhost:3000/products"

fetch(API_URL)
  .then((response) => response.json())
    .then((data) => {
        let product = data;
        let header = [
            {
                "id":"ID SP",
                "name":"Tên Sản Phẩm",
                "anh":"Ảnh",
                "price":"Giá",
                "act":"Hành Động"
            }
        ] 
        let table = document.querySelector("#datatablesSimple");   
        let generateTable = (header, product) => {
            if(!header || !product || header.length ===0 || product.length===0){
                return "";
            }
            let headers = generateTableHeader(header);
            product.forEach((item) => {
                table.innerHTML += generateTableRow(item);
            });
            return `<thead ><tr>${headers}</tr></thead><tbody>${table}</tbody>`;
        }
        generateTable(header, product);  
    })
Delete();
//update
Update()
