const form = document.querySelector('form');

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '474a73c5782c46a96eef17232c65eeb1';

form.addEventListener('submit', submitHandler);

function submitHandler(event) {
    event.preventDefault();
    const city = event.target.city.value;
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric&lang=ua`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((weatherData) => {
            clearWidget();
            const card = createWidget(weatherData);
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
    const cityName = createElement('h2', {}, 'Місто: ', getTranslate(weatherObj.name));
    const desription = createElement('p', {}, 'Хмарність: ', weatherObj.weather[0].description);
    const temp = createElement('p', {}, 'Температура повітря: ', weatherObj.main.temp,  ' \u00B0C');
    const wind = createElement('p', {}, 'Швидкість вітру: ', weatherObj.wind.speed, ' м/с');
    const humidity = createElement('p', {}, 'Вологість: ', weatherObj.main.humidity, ' %');
    const widgetCard = createElement('section', { classNames: ['weather'] }, cityName, desription, temp, humidity, wind);
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
        'Vinnytsia': 'Вінниця',
    }
    return cityName[city];
}