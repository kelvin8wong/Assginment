function counterLetters (input){
  var output = input.toLowerCase();
  var counter = {};

  for (var i = 0; i < output.length;i++) {

    var letter = output[i];

    if (letter.trim() !== '') {

      if(counter.hasOwnProperty(letter)){
        counter[letter] += ","+i;
      } else {
        counter[letter] = i;
      }

    }



    // }
  } //for loop
  return counter;

} //main function bracket

console.log (counterLetters("lighthouse in the house"));