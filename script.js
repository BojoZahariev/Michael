/*
let topM = rect.top;
let leftM = rect.left;

*/
let moved = false;
let match = false;
const hero = document.querySelector('#hero');

const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');

destination1.addEventListener('click', e => {
  if (!moved) {
    var rect = destination1.getBoundingClientRect();
    hero.style.left = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;

    moved = true;
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    var rect = destination2.getBoundingClientRect();
    hero.style.marginLeft = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;
    moved = true;
    hero.classList.add('animatedMatch');
    destination2.classList.add('animatedTruckMatch');
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    var rect = destination3.getBoundingClientRect();
    hero.style.marginLeft = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;
    moved = true;
  }
});
