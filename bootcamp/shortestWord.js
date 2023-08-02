export default   function shortestWord(sentence){
    sentence = sentence.split(' ')
    let mostShortest = sentence[0]
    for (let i = 0;i < sentence.length; i++){
      var loopedWords = sentence[i]
      //this if statement is if the looped word's length is shorter/less than or equal to the value at index 0, mostShort takes the value
        if (loopedWords.length<=mostShortest.length){
          mostShortest = loopedWords}
    }
   //console.log(mostShortest)
    return mostShortest
  }