// let first = document.getElementById('first');
// first.insertAdjacentHTML('beforebegin', '<div>beforebegin</div>');
// first.insertAdjacentHTML('beforeend','<div>beforeend</div>');
// first.insertAdjacentHTML('afterbegin', '<div>afterbegin</div>');
// first.insertAdjacentHTML('afterend', '<div>afterend</div');

// const h1 = document.getElementById('h1');
// h1.remove();

// first.className = 'red'

// first.classList.add('text-blue');
// first.classList.toggle('yellow');

// setTimeout(() => {
//     first.classList.remove('red');
// }, 2000);

// setInterval(() => {
//     first.classList.toggle('red');
// },500)

// document.getElementById('button').addEventListener('click', () => {
//     document.getElementById('para').innerHTML = 'Hello World';
// })

setInterval(() => {
    let date = new Date();
    let hour = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
    let minute = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
    let second = date.getSeconds().toString().length === 1 ? '0' + date.getSeconds() : date.getSeconds();
    d = `${hour}:${minute}:${second}`
    document.getElementById('clock').innerHTML = d;
    document.getElementById('clock').classList.toggle('red');
}, 500);