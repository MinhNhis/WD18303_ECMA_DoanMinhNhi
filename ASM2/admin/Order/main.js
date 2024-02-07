import {UpdateOrder} from "./update.js";
let generateTableHeader = (headerTitles) =>{
    if(!headerTitles || headerTitles.length ===0){
        return "";
    }
    let html = document.querySelector("#tableOrder");
    headerTitles.forEach(element => {
       html.innerHTML += `
            <th class ="text-center">${element.id}</th>
            <th class ="text-center">${element.customer_name}</th>
            <th class ="text-center">${element.customer_address}</th>
            <th class ="text-center">${element.customer_email}</th>
            <th class ="text-center">${element.customer_phone_number}</th>
            <th class ="text-center">${element.created_date}</th>
            <th class ="text-center">${element.status}</th>
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
                <td class ="text-center">${rowData.customer_name}</td>
                <td class ="text-center">${rowData.customer_address}</td>
                <td class ="text-center">${rowData.customer_email}</td>
                <td class ="text-center">${rowData.customer_phone_number}</td>
                <td class ="text-center">${rowData.created_date}</td>
                <td class ="text-center">${rowData.status}</td>
                <td class ="text-center" >
                    <button type="button" class="btn btn-primary" data-id="${rowData.id}">Sửa</button>
                </td>
            </tr>
            `;
}

const API_URL = " http://localhost:3000/orders"

fetch(API_URL)
  .then((response) => response.json())
    .then((data) => {
        let order = data;
        let header = [
            {
                "id": "id",
                "customer_name": "customer_name",
                "customer_address": "customer_address",
                "customer_email": "customer_email",
                "customer_phone_number": "customer_phone_number",
                "created_date": "created_date",
                "status": "status",
                "act":"Hành động"
            }
        ] 
        let table = document.querySelector("#tableOrder");   
        let generateTable = (header, order) => {
            if(!header || !order || header.length ===0 || order.length===0){
                return "";
            }
            let headers = generateTableHeader(header);
            order.forEach((item) => {
                table.innerHTML += generateTableRow(item);
            });
            return `<thead ><tr>${headers}</tr></thead><tbody>${table}</tbody>`;
        }
        generateTable(header, order);  
    })
UpdateOrder()