var chocolateBarfs = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.push(element);
  return array;
}