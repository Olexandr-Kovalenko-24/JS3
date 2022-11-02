const resultOfRequest = fetch('./data.json');
// console.log(resultOfRequest);

resultOfRequest
.then((response)=>response.json())
.then((successData)=>{
    const card = createUserCard(successData);
    const root = document.querySelector('#root');
    root.append(card);
})
.catch((reject)=>{
    console.log(reject);
})


function createUserCard(user){
    const h2 = createElement('h2', {classNames: ['username']}, user.firstName, user.lastName);
    const p = createElement('p', {}, user.telNum);
    const div = createElement('div', {classNames: ['card-wrapper']}, h2,p);
    return div;
}


function createElement(type, {classNames=[]}, ...children){
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}