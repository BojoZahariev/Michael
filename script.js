const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');
const destination4 = document.querySelector('#destination4');
const destination5 = document.querySelector('#destination5');

const destinations = document.getElementsByClassName('destinations');

let allTrucks = [
  { tag: 'ambulance', pic: 'images/ambulance.png' },
  { tag: 'firetruck', pic: 'images/firetruck.png' },
  { tag: 'policeCar', pic: 'images/policeCar.png' },
  { tag: 'buldozer', pic: 'images/buldozer.png' },
  { tag: 'tractor', pic: 'images/tractor.png' }
];

shuffleArr = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

let shuffledTrucksCopy = [...allTrucks];
let shuffledTrucks = this.shuffleArr(shuffledTrucksCopy);

let moved = false;
let match = 'firetruck';
const hero = document.querySelector('#hero');

const checkMatch = vehicle => {
  let rect = vehicle.getBoundingClientRect();
  hero.style.left = `${rect.left}px`;
  hero.style.top = `${rect.top + 15}px`;
  if (vehicle.tag === match) {
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

for (i = 0; i < Array.from(destinations).length; i++) {
  Array.from(destinations)[i].src = shuffledTrucks[i].pic;
  Array.from(destinations)[i].tag = shuffledTrucks[i].tag;
}

Array.from(destinations).forEach(element => {
  element.addEventListener('click', e => {
    if (!moved) {
      checkMatch(element);
      console.log(element.tag);
    }
  });
});

/*
destination1.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination1);
    console.log(destination1.tag);
  }
});

destination2.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination2);
    console.log(destination2.tag);
  }
});

destination3.addEventListener('click', e => {
  if (!moved) {
    checkMatch(destination3);
    console.log(destination3.tag);
  }
});
*/

/*

destination1.src = shuffledTrucks[0].pic;
destination1.tag = shuffledTrucks[0].tag;
destination2.src = shuffledTrucks[1].pic;
destination2.tag = shuffledTrucks[1].tag;
destination3.src = shuffledTrucks[2].pic;
destination3.tag = shuffledTrucks[2].tag;
destination4.src = shuffledTrucks[3].pic;
destination4.tag = shuffledTrucks[3].tag;
destination5.src = shuffledTrucks[4].pic;
destination5.tag = shuffledTrucks[4].tag;
*/
