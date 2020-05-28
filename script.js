/*
let topM = rect.top;
let leftM = rect.left;

*/
let moved = false;
const lorry = document.querySelector('#lorry');

const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');

destination1.addEventListener('click', e => {
  if (!moved) {
    var rect = destination1.getBoundingClientRect();
    lorry.style.left = `${rect.left}px`;
    lorry.style.top = `${rect.top}px`;
    moved = true;
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    var rect = destination2.getBoundingClientRect();
    lorry.style.marginLeft = `${rect.left}px`;
    lorry.style.top = `${rect.top}px`;
    moved = true;
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    var rect = destination3.getBoundingClientRect();
    lorry.style.marginLeft = `${rect.left}px`;
    lorry.style.top = `${rect.top}px`;
    moved = true;
  }
});
