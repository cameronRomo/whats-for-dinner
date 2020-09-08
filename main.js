var secondForm = document.querySelector('.recipe');
var side = document.querySelector('#side');
var main = document.querySelector('#main-dish');
var desert = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');

letsCookButton.addEventListener('click', displayRandomSide);

var newDish;

function displayRandomSide() {
randomDish(sides);
secondForm.insertAdjacentHTML('afterbegin', `
<h3>You should make:</h3>
<h1>${newDish}</h1>`
  );
};

function randomDish(dish) {
  var newDish;
  for (var i = 0; i < dish.length; i++) {
    dish[getRandomIndex(dish)];
  }
  // var randomSide = sides[getRandomIndex(sides)];
  // var randomMain = mains[getRandomIndex(mains)];
  // var randomDessert = desserts[getRandomIndex(desserts)];
};
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
