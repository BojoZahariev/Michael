/*
let topM = rect.top;
let leftM = rect.left;

*/
const lorry = document.querySelector('#lorry');

const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');

destination1.addEventListener('click', e => {
  var rect = destination1.getBoundingClientRect();
  lorry.style.left = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});

destination2.addEventListener('click', e => {
  var rect = destination2.getBoundingClientRect();
  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});

destination3.addEventListener('click', e => {
  var rect = destination3.getBoundingClientRect();
  lorry.style.marginLeft = `${rect.left}px`;
  lorry.style.top = `${rect.top}px`;
});
