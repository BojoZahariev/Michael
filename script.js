const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');
const destination4 = document.querySelector('#destination4');
const destination5 = document.querySelector('#destination5');
const hero = document.querySelector('#hero');

const destinations = document.getElementsByClassName('destinations');

let moved = false;
let match = 'firetruck';

let allTrucks = [
  { tag: 'ambulance', pic: 'images/ambulance.png' },
  { tag: 'firetruck', pic: 'images/firetruck.png' },
  { tag: 'policeCar', pic: 'images/policeCar.png' },
  { tag: 'buldozer', pic: 'images/buldozer.png' },
  { tag: 'tractor', pic: 'images/tractor.png' }
];

let allHeros = [
  { tag: 'ambulance', pic: 'images/doctor.png' },
  { tag: 'firetruck', pic: 'images/fireman.png' },
  { tag: 'policeCar', pic: 'images/officer.png' },
  { tag: 'buldozer', pic: 'images/construction.png' },
  { tag: 'tractor', pic: 'images/farmer.png' }
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

let shuffledHerosCopy = [...allHeros];
let shuffledHeros = this.shuffleArr(shuffledHerosCopy);

hero.src = shuffledHeros[0].pic;
hero.tag = shuffledHeros[0].tag;

const checkMatch = vehicle => {
  let rect = vehicle.getBoundingClientRect();
  hero.style.left = `${rect.left}px`;
  hero.style.top = `${rect.top - 20}px`;
  if (vehicle.tag === hero.tag) {
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
