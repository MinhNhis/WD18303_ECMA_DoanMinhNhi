// bài 1
let multiply = (num1, num2)=> num1 * num2;
console.log(multiply(1,5));

let toCelsius =(fahrenheit)=> (5/9)*(fahrenheit -32);
console.log(toCelsius(3));

let padZeros =(num, totalLen)=>{
    let numStr = num.toString();
    let numZeros = totalLen  - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;

    }
    return numStr;
}
console.log(padZeros(2,10));

let power =(base, exponent)=>{
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;

    }
    return result;
}
console.log(power(2,10));


let greet =(who)=>{
    console.log("Hello "+ who);
}

greet("Nhí");

// bài 2
let arr = [1, 2, 3, 4, 5, 6, 7];

let GTSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
};

console.log(GTSum(arr)); // Kết quả: 28

// bài 3

let Entity  = function( name, delay) {
    this.name = name;
    this.delay = delay;
}
Entity.prototype.greet = function () {
    setTimeout(function(){
        console.log('xin chao, ten toi la ',this. name);
    }.bind(this),this.delay);
}

let java = new Entity ('java', 5000);
let cpp = new Entity('c++',30);

java.greet();
cpp.greet();