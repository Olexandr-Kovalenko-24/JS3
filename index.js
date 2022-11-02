const resultOfRequest = fetch('http://');
console.log(resultOfRequest);

resultOfRequest
.then(()=>{
    console.log('promise ok')
}).catch((reject)=>{
    console.log(reject);
})