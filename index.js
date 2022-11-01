// const h1 = document.querySelector('h1');

// const id = setInterval(tick, 1000);
// let counter = 0;

// function tick() {
//     h1.textContent = ++counter;
// }

// const btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     clearInterval(id);
// })

// const h1 = document.querySelector('h1');

// const id = setInterval(tick, 1000);
// let counter = 0;

// function tick(){
//     h1.textContent = ++counter;
// }

// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     clearInterval(id);
// })


const user = {
    firstName: 'Alex',
    lastName: 'Doe',
    age: 25,
    telNum: '+380432234234',
    footSize: undefined,
    superId: Symbol(),
    address: null,
    sayHello: function(){
        return `${this.firstName} say: Hello!`
    }
}

const str = JSON.stringify(user);

JSON.parse(str); 

/* return
address: null
age:25
firstName:"Alex"
lastName:"Doe"
telNum:"+380432234234"
*/