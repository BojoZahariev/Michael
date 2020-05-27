let topM = '';
let leftM = '300px';

const lorry = document.querySelector('#lorry');

const bin = document.querySelector('#bin');
var rect = bin.getBoundingClientRect();
console.log(rect.top, rect.left);

const btn = document.querySelector('#btn');
btn.addEventListener('click', e => {
  lorry.style.marginLeft = leftM;
});
