var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  return newArray.push(element);
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.push(element);
}