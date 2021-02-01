// === Falsy Value
// 0
// ""
// undefined 
// null 
// NaN
// false
// === Truthy Value
// '0' ' ' [] {}

let name = 12;
if(name || name == 0){
    console.log('Condition is True');
}else{
    console.log('Condition is false');
}