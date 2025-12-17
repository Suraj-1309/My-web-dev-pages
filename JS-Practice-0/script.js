const count = document.getElementById('count');

const add = () =>  count.innerText = Number(count.innerText) + 1;
const sub = () => count.innerText = Number(count.innerText) - 1;
const makeZero = () => count.innerText = 0;

document.getElementById('decrese').addEventListener('click', add);
document.getElementById('increment').addEventListener('click', sub);
document.getElementById('reset').addEventListener('click', makeZero);