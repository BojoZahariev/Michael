/*
let topM = rect.top;
let leftM = rect.left;

*/

const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');

let moved = false;
let match = destination2;
const hero = document.querySelector('#hero');

const checkMatch = vehicle => {
  if (vehicle === match) {
    var rect = vehicle.getBoundingClientRect();
    hero.style.marginLeft = `${rect.left}px`;
    hero.style.top = `${rect.top + 15}px`;
    moved = true;
    hero.classList.add('animatedMatch');
    vehicle.classList.add('animatedTruckMatch');
  }
};

destination1.addEventListener('click', e => {
  if (!moved) {
    var rect = destination1.getBoundingClientRect();
    hero.style.left = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;
    hero.classList.add('animatedNoMatch');
    moved = true;
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination2);
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    var rect = destination3.getBoundingClientRect();
    hero.style.left = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;
    hero.classList.add('animatedNoMatch');
    moved = true;
  }
});
