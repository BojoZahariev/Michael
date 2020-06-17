const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');
const destination4 = document.querySelector('#destination4');
const destination5 = document.querySelector('#destination5');
const hero = document.querySelector('#hero');
const prize = document.querySelector('#prize');
const reload = document.querySelector('#reload');

const destinations = document.getElementsByClassName('destinations');

var moved = false;
var turn = 0;

//let match = 'firetruck';

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
  hero.classList.add('trans');
  hero.style.left = `${rect.left}px`;
  hero.style.top = `${rect.top - 20}px`;
  if (vehicle.tag === hero.tag) {
    moved = true;
    hero.classList.add('animatedMatch');
    vehicle.classList.add('animatedTruckMatch');

    if (turn < 4) {
      setTimeout(function() {
        moved = false;
        hero.classList.remove('trans');
        hero.classList.remove('animatedMatch');
        hero.classList.remove('animatedNoMatch');

        turn += 1;

        hero.src = shuffledHeros[turn].pic;
        hero.tag = shuffledHeros[turn].tag;

        hero.style.left = '10%';
        hero.style.top = '50%';
      }, 14000);
    } else {
      setTimeout(function() {
        win();
      }, 9000);
    }
  } else {
    moved = true;
    hero.classList.add('animatedNoMatch');

    setTimeout(function() {
      moved = false;
      hero.classList.remove('animatedMatch');
      hero.classList.remove('animatedNoMatch');
      hero.style.left = '10%';
      hero.style.top = '50%';
    }, 10000);
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
    }
  });
});

const win = () => {
  prize.style.display = 'block';
  confetti();
};

reload.addEventListener('click', e => {
  window.location.reload();
});

const confetti = () => {
  let W = window.innerWidth;
  let H = window.innerHeight;
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const maxConfettis = 150;
  const particles = [];

  const possibleColors = [
    'DodgerBlue',
    'OliveDrab',
    'Gold',
    'Pink',
    'SlateBlue',
    'LightBlue',
    'Gold',
    'Violet',
    'PaleGreen',
    'SteelBlue',
    'SandyBrown',
    'Chocolate',
    'Crimson'
  ];

  function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function() {
      context.beginPath();
      context.lineWidth = this.r / 2;
      context.strokeStyle = this.color;
      context.moveTo(this.x + this.tilt + this.r / 3, this.y);
      context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
      return context.stroke();
    };
  }

  function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
      results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
      particle = particles[i];

      particle.tiltAngle += particle.tiltAngleIncremental;
      particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
      particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

      if (particle.y <= H) remainingFlakes++;

      // If a confetti has fluttered out of view,
      // bring it back to above the viewport and let if re-fall.
      if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
        particle.x = Math.random() * W;
        particle.y = -30;
        particle.tilt = Math.floor(Math.random() * 10) - 20;
      }
    }

    return results;
  }

  window.addEventListener(
    'resize',
    function() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    false
  );

  // Push new confetti objects to `particles[]`
  for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
  }

  // Initialize
  canvas.width = W;
  canvas.height = H;
  Draw();
};
