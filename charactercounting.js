function counterLetters (input){
  var output = input.toLowerCase().split(' ').join('');
  var counter = {};
  for (var i = 0; i < output.length; i++) {
    if (counter[output[i]] === undefined) {
      counter[output[i]] = 1;
    } else {
      counter[output[i]] += 1;
    }
  }
  return counter;


}

console.log (counterLetters("lighthouse in the house"));
