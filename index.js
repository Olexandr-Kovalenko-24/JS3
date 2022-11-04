const form = document.querySelector('form');

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = 'f7c576ba3699bdd0b98ddcf196639992';

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const city = event.target.city.value;
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric&lang=ua`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((wetherData) => {
            clearWidget();
            const card = createWidget(wetherData);
            const root = document.querySelector('#root');
            root.append(card);
        })
}

function clearWidget() {
    const section = document.querySelector('.weather');
    if (section) {
        section.remove();
    }
    return true;
}

function createWidget(weatherObj) {
    const cityName = createElement('h1', {}, 'Місто: ', getTranslate(weatherObj.name));
    const desription = createElement('h2', {}, 'Хмарність: ', weatherObj.weather[0].description);
    const temp = createElement('p', {}, 'Температура повітря: ', weatherObj.main.temp);
    const wind = createElement('p', {}, 'Швидкість вітру: ', weatherObj.wind.speed);
    const widgetCard = createElement('section', { classNames: ['weather'] }, cityName, desription, temp, wind);
    return widgetCard;
}

function createElement(type, { classNames = [] }, ...children) {
    const elem = document.createElement(type);
    elem.classList.add(...classNames);
    elem.append(...children);
    return elem;
}

function getTranslate(city) {
    const cityName = {
        'Kyiv': 'Київ',
        'Dnipro': 'Дніпро',
        'Kharkiv': 'Харків',
        'Zaporizhzhia': 'Запоріжжя',
        'Lviv': 'Львів',
    }
    return cityName[city];
}