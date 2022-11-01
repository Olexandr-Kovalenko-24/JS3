
// setTimeout(function (number=10){
//     let sum = 0;
// for (let i = 0; i <= number; i++) {
//     sum += i;  
// }
// console.log(sum);
// }, 5000)

function sum (){
    let summary = 0;
    for (let i = 0; i < 10000; i++) {
        summary += i;  
    }
    console.log(summary);
    console.timeEnd(1);
}

console.time(1);
setTimeout(sum, 3000);