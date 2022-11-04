const API_BASE = 'https://dummyjson.com/products'
const root = document.querySelector('#root');
const spinner = document.createElement('div');
spinner.classList.add('loader');
root.append(spinner);

fetch(API_BASE)
    .then((res) => res.json())
    .then(({ products }) => {
        const productCardArray = products.map(createProductCard);
        root.append(...productCardArray);
    })
    .catch((rej) => {
        root.append('Some error happend :(');
    })
    .finally(() => {
        spinner.remove();
    })

function createProductCard(product) {
    const h2 = createElement('h2', { classNames: ['name'] }, product.title);
    const p = createElement('p', {}, product.description);
    const image = createImageWrapper(product);
    const price = createElement('p', {}, `${product.price} UAH`);
    const div = createElement('div', { classNames: ['card-wrapper'] }, h2, image, price, p);
    return div;
}


function createElement(type, { classNames = [] }, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function createImageWrapper(product) {
    const imageWrapper = createElement('div', { classNames: ['image-wrapper'] }, product.title[0])
    imageWrapper.setAttribute('id', `wrapper-${product.id}`);
    const avatar = createImage(product);
    return imageWrapper;
}

function createImage(product) {
    const avatar = document.createElement('img');
    avatar.setAttribute('src', product.images[1]);
    avatar.dataset.id = product.id;
    avatar.addEventListener('load', imageLoadHandler);
    avatar.addEventListener('error', imageErrorHandler);
    avatar.classList.add('photo');
    return avatar;
}

function imageLoadHandler({ target }) {
    const parentWrapper = document.querySelector((`#wrapper-${target.dataset.id}`));
    parentWrapper.append(target);
}

function imageErrorHandler(event) {
    event.target.remove();
}