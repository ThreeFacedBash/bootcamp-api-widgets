export default function wordLengths(sentence) {
    sentence = sentence.split(' ')
     let sumOfWords = 0
         for (let i = 0; i < sentence.length; i++) {
          var loopedWords = sentence[i]
       sumOfWords += loopedWords.length;
     }
    //console.log(sumOfWords)
     return sumOfWords;
   }