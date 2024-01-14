let convertTemperature = (temperature, unit)=>{
    if(unit !=="C" && unit !=="F"){
        return "NHẬP ĐỘ C HOẶC ĐỘ F";
    };
    if(unit === "C"){
        return (temperature * 9/5) + 32;
    }else{
        return (temperature - 32) * 5/9;
    }
}

console.log(convertTemperature(98.6,"F"));