import express from 'express';

import longestWord from './bootcamp/longestWord.js';
import shortestWord from './bootcamp/shortestWord.js';
import wordLengths from './bootcamp/wordLengths.js';
import totalPhoneBill from './bootcamp/totalPhoneBill.js';
import enoughAirtime from './bootcamp/enoughAirtime.js';

const app = express();

app.use(express.static('public'));

app.use(express.json())

const PORT = process.env.PORT || 2324;

app.get('/api/word_game', (req, res) => {

    const sentence = req.query.sentence
    

    if(!sentence){
        res.json({
            error:'Please enter a sentence'
        })
    }

    res.json({
        "longestWord" : longestWord(sentence),
        "shortestWord" : shortestWord(sentence),
        "sum": wordLengths(sentence)
    })
})

app.post('/api/phonebill/total', (req, res) => {
    console.log(req.body.total)

   const bill = req.body.bill

   if(!bill.startsWith('sms') || !bill.startsWith('sms') ){
    res.json({
        error: 'Please enter usage in valid format'
    })
   }

    res.json({
        "total": totalPhoneBill(bill),
    })

})


app.post('/api/enough', (req, res)=> {

    const usage = req.body.usage
    const funds = req.body.funds

    res.json({
        "available": enoughAirtime(usage, funds),
    })

})

app.listen(PORT, () => console.log(`App has began running on ${PORT}`))