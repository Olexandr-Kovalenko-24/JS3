const resultOfRequest = fetch('http://');
console.log(resultOfRequest);

resultOfRequest
.then((response)=>{
    console.log('promise ok')
    return response.json();
}).then((successData)=>{
    console.log(successData);
})
.catch((reject)=>{
    console.log(reject);
})