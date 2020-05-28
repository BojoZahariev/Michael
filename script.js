/*
let topM = rect.top;
let leftM = rect.left;

*/
const lorry = document.querySelector('#lorry');

const bin1 = document.querySelector('#bin1');
const bin2 = document.querySelector('#bin2');
const bin3 = document.querySelector('#bin3');

bin1.addEventListener('click', e => {
  var rect = bin1.getBoundingClientRect();
  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});

bin2.addEventListener('click', e => {
  var rect = bin2.getBoundingClientRect();
  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});

bin3.addEventListener('click', e => {
  var rect = bin3.getBoundingClientRect();
  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});
