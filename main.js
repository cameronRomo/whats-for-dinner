function randomDish() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomIndex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)];
}
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
