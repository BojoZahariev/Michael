/*
let topM = rect.top;
let leftM = rect.left;

*/
const lorry = document.querySelector('#lorry');

const bin1 = document.querySelector('#bin1');
bin1.addEventListener('click', e => {
  var rect = bin1.getBoundingClientRect();

  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
  console.log(rect.top, rect.left);
});

const bin2 = document.querySelector('#bin2');
bin2.addEventListener('click', e => {
  var rect = bin2.getBoundingClientRect();

  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
  console.log(rect.top, rect.left);
});
