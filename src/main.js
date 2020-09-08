var secondForm = document.querySelector('.recipe');
var cookPot = document.querySelector('.form2-display');
var sideValue = document.getElementById('side');
var mainDishValue = document.getElementById('main-dish')
var letsCookButton = document.querySelector('.lets-cook');
var politeGest = document.querySelector('.polite-gesture')
var randoDish = document.querySelector('.random-dish')
letsCookButton.addEventListener('click', function() {
  displayRandomSide();
  displayRandomMain();
});

var newDish;

function displayRandomSide() {
  event.preventDefault();
  if (sideValue.checked === true) {
    randomDish(mains);
    cookPot.innerHTML = '';
    secondForm.insertAdjacentHTML('afterbegin', `
    <h3 class="polite-gesture">You should make:</h3>
    <h1 class="random-dish">${newDish}!</h1>`
    );
  }
};

function displayRandomMain() {
  event.preventDefault();
  if (mainDishValue.checked === true) {
    randomDish(mains);
    cookPot.innerHTML = '';
    secondForm.insertAdjacentHTML('afterbegin', `
    <h3 class="polite-gesture">You should make:</h3>
    <h1 class="random-dish">${newDish}!</h1>`
    );
  }
};

function randomDish(dish) {
  for (var i = 0; i < dish.length; i++) {
    newDish = dish[getRandomIndex(dish)];
  }
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
