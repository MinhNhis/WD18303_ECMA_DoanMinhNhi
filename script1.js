//bài 1
const result = {
    success:["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi","no-dup-keys"]
};

function makeList(array) {
    const failureItems = [];
    array.forEach(element => {
        failureItems.push(`<li class="text-warning">${element}</li>`);
    });

    return failureItems;
}

const failureList = makeList(result.failure);
console.log(failureList);


//bài 2
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [a,b,...arr]= list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);


//bài 3
const arr1 = ['JAN','FEB','MAR','APR','MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);

//bài 4

function spreadOut(){
    let fragment = ['to', 'code'];
    let sentence = ['learning',...fragment, 'is','fun'];
    return sentence;
}

console.log(spreadOut());