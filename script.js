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
  let rect = vehicle.getBoundingClientRect();
  hero.style.left = `${rect.left}px`;
  hero.style.top = `${rect.top + 15}px`;
  if (vehicle === match) {
    moved = true;
    hero.classList.add('animatedMatch');
    vehicle.classList.add('animatedTruckMatch');
  } else {
    moved = true;
    hero.classList.add('animatedNoMatch');

    setTimeout(function() {
      moved = false;
      hero.classList.remove('animatedNoMatch');
      hero.style.left = '100px';
      hero.style.top = '50%';
    }, 10000);
  }
};

const heroPosition = () => {
  let rect = hero.getBoundingClientRect();
  console.log(rect.left);
  if (rect.left === 100) {
    hero.classList.remove('animatedNoMatch');
    console.log('ding');
    return true;
  } else {
    return false;
  }
};

destination1.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination1);
    /*
    var rect = destination1.getBoundingClientRect();
    hero.style.left = `${rect.left}px`;
    hero.style.top = `${rect.top}px`;
    hero.classList.add('animatedNoMatch');
    moved = true;
    setTimeout(function() {
      moved = false;
      hero.classList.remove('animatedNoMatch');
      hero.style.left = '100px';
      hero.style.top = '50%';
    }, 10000);
    */
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination2);
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination3);
  }
});
