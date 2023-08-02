export default function longestWord(sentence) {
    sentence = sentence.split(' ')
    let lengthiestWord = sentence[0];//the word at index 0
    for (let i = 1; i < sentence.length; i++) {
      var loopedWords = sentence[i]
      if (loopedWords.length >= lengthiestWord.length) /*more or equal because we want it to take the most recent shortest value*/{
        lengthiestWord = loopedWords
      }
    }
   //console.log(lengthiestWord)
    return lengthiestWord;
  }