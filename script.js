//bài 2
let name = "Doan Minh Nhi";
let birthday = "2004/02/05";
//arrow function
let sayHello = () => {
    console.log(`I'm ${name}, ${birthday}`);
};
let name1 = "Nhi";
let birthday1 = "05-02-2004";

let sayHello1 = () => {
    console.log(`I'm ${name1}, ${birthday1}`);
};
sayHello();
sayHello1();
// tính thời gian tồn tại của mình

//bài 3
fetch("https://api.publicapis.org/entries")
    .then(function (response){
        response.json().then(function (data){
            console.log(data.entries);

            let array = data.entries;

            let html = document.getElementById('pc05632');
            let child_html = `<ul><li><strong>COUNT:</strong>${data.count}</li></ul>`;
            html.innerHTML = data.count;

            array.forEach(element => {
                console.log(element.Description);
                child_html +=`<li> ${element.Description}</li>`;

            });

            child_html += `</ul>`;
            html.innerHTML=child_html
        })
    })
//bài 4
fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
    function (response) {
        response.json().then(function (dataNation) {
            let array = dataNation.data;
            let html1 = document.querySelector(".table-body");
            let child_html1 = "";

            array.forEach((element, index) => {
                child_html1 += `
            <tr>
                <th scope="row">${index}</th>
                <td>${element.Nation}</td>
                <td>${element.Year}</td>
                <td>${element.Population}</td>
            </tr>
                `;
            });

            html1.innerHTML = child_html1;
        });
    }
);
//
fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then(function (response) {
        response.json().then(function (data) {
            let html2 = document.querySelector(".table-body1");
            let child_html2 = "";
            data.forEach((element, index) => {
                child_html2 += `
                <tr>
                    <th scope="row">${index}</th>
                    <td><img src="${element.avatar}" alt="" width="50px"></td>
                    <td>${element.name}</td>
                    <td>${element.createdAt}</td>
                </tr>
                
                `;
            });
            html2.innerHTML = child_html2;
        });
    });
