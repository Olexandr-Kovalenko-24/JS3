const promise = new Promise(function(resolve, reject){
    if(2+2 === 4){
        resolve('It`s 4!');
    } else{
        reject('It`s not 4! How?!!!');
    }
})

promise.then((res)=>{
    console.log('Resolve: ', res);
}, (error)=>{
    console.log('Reject: ', error);
});