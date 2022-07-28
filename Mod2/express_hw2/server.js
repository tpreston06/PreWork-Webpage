const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3003;

["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

const fs = require('fs')

app.engine('hypatia', (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err)

        const rendered = context.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#', '<div>' + options.content + '</div>')
    })
})

app.set('views', './views')

app.set('views engine', 'hypatia')

//routes
app.get('/greeting/:name', (req,res) => {
    res.send('Hey, how\'s it going? ' + req.params.name)
})

app.get('/tip/',(req, res) =>{
    res.render('tip', {title: 'TIP', message: 'subtotal <input><br> total <br> Tip(20%) = ', content: 'TOTAL = '})
})

app.get('/tip/:total',(req, res) =>{
    res.send('The total is $' + req.params.total)
})

app.get('tip/:total/:percentage', (req,res) => {
    let tip = req.params.total = (req.params.percentage/100)
    res.render('template', {title: 'TIP', message: 'your subtotal is $' + req.params.total + 'tip will be $' + tip})
})

app.get ('/magic/:question',(req,res) => {
    const response = responses[Math.floor(Math.random() * responses.length)]
       
     res.render('magic', { title: 'Magic', message: response})
 })

 app.listen(port, () => {
    console.log('Listening on ' + port)
})