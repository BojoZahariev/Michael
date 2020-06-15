const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');
const destination4 = document.querySelector('#destination4');
const destination5 = document.querySelector('#destination5');

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
      hero.style.left = '10%';
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
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination2);
    console.log(destination1.src);
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination3);
  }
});

shuffleArr = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

let allTrucks = ['images/ambulance.png', 'images/firetruck.png', 'images/policeCar.png', 'images/buldozer.png', 'images/tractor.png'];
let shuffledTrucksCopy = [...allTrucks];
let shuffledTrucks = this.shuffleArr(shuffledTrucksCopy);

shuffledTrucks.forEach(element => {
  destination1.src = shuffledTrucks[0];
  destination2.src = shuffledTrucks[1];
  destination3.src = shuffledTrucks[2];
  destination4.src = shuffledTrucks[3];
  destination5.src = shuffledTrucks[4];
});
console.log(shuffledTrucks);
