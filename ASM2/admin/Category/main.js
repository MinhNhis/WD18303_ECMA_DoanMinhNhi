import { DeleteCategory } from "./del.js";
import { UpdateCate } from "./update.js";

let generateTableHeader = (headerTitles) =>{
    if(!headerTitles || headerTitles.length ===0){
        return "";
    }
    let html = document.querySelector("#tableCate");
    headerTitles.forEach(element => {
       html.innerHTML += `
            <th class ="text-center">${element.id}</th>
            <th class ="text-center">${element.name}</th>
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
                <td class ="text-center" >
                    <button type="button" class="btn btn-primary" data-id="${rowData.id}">Sửa</button>
                    <button type="button" class="btn btn-danger" data-id="${rowData.id}")">Xóa</button>
                </td>
            </tr>
            `;
}

const API_URL = " http://localhost:3000/categories"

fetch(API_URL)
  .then((response) => response.json())
    .then((data) => {
        let cate = data;
        let header = [
            {
                "id":"ID",
                "name":"Tên Loại",
                "act":"Hành động"
            }
        ] 
        let table = document.querySelector("#tableCate");   
        let generateTable = (header, cate) => {
            if(!header || !cate || header.length ===0 || cate.length===0){
                return "";
            }
            let headers = generateTableHeader(header);
            cate.forEach((item) => {
                table.innerHTML += generateTableRow(item);
            });
            return `<thead ><tr>${headers}</tr></thead><tbody>${table}</tbody>`;
        }
        generateTable(header, cate);  
    })
//Delete danh mục 
DeleteCategory()
UpdateCate()