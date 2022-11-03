const resultOfRequest = fetch('https://dummyjson.com/products');

resultOfRequest
    .then((res) => res.json())
    .then(({ products }) => {
        const root = document.querySelector('#root');
        const productCardArray = products.map(createProductCard);
        root.append(...productCardArray);
        // root.addEventListener('load', pageLoadHandler);
    })
    .catch((rej) => {
        console.log(rej);
    })
    .finally(() => {
        const loader = document.querySelector('.loader');
        loader.classList.remove('loader');
    })

function createProductCard(product) {
    const h2 = createElement('h2', { classNames: ['name'] }, product.title);
    const p = createElement('p', {}, product.description);
    const div = createElement('div', { classNames: ['card-wrapper'] }, h2, p);
    return div;
}


function createElement(type, { classNames = [] }, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}


// function pageLoadHandler(event){
// event.classList.add('loader')
// }