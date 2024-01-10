function generateTableHeader(headerTitles){
    if(!headerTitles || headerTitles.length ===0){
        return "";
    }
    let html = ``;
    headerTitles.forEach(element => {
        html += `<th>${element}</th>`
    });
    return `<thead><tr>${html}</thead></tr>`;
}


function generateTableRow(rowData){
    if(!rowData || rowData.length ===0){
        return "";
    }

    return `<tr>
            <td>${rowData.id}</td>
            <td>${rowData.name}</td>
            <td><img src="${rowData.avatar}" height="50"></td>
            <td>${rowData.createAt}</td>
    </tr>`;
}

function generateTable(headers, data){
    if(!headers || !data || headers.length ===0 || data.length===0){
        return "";
    }

    let headerRow = generateTableHeader(headers);
    html=``;
    data.forEach(element => {
        html +=generateTableRow(element);
    });

    return `<table>${headerRow}<tbody>${html}</tbody></table>`;
}

let list=[
    {
        id: 1,
        name: "Nguyễn Văn A",
        avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/09"
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        avatar:"https://th.bing.com/th/id/OIP.9OFvFr0BYWWV6wKtS8ze1AHaHa?rs=1&pid=ImgDetMain",
        createAt: "2024/01/09"
    }
] ;
let header = [
    "id",
    "tên",
    "ảnh",
    "ngày tạo"
]
document.write(generateTable(header, list));
