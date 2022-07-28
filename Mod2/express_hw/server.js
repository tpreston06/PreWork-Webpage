const express = require('express'); //creates express server
const app = express(); //calls express function to create application to set up express server

// Configure the app (app.set)
const fs = require('fs') // this engine requires the fs module like we did Saturday
app.engine('hypatia', (filePath, options, callback) => { // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>').replace('#content#','<div>'+ options.content + '</div>' )
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

// Mount middleware (app.use)


// Mount routes
app.get('/', (req, res) => {
    res.render('template', { title: 'Boogey Wonderland', message: 'DANCE!', content: 'All the love in the world can\'t be gone (love in the world can\'t be gone)<br> All the need to be loved can\'t be wrong (need to be loved can\'t be wrong)<br>All the records are playing and my heart keeps saying Boogie Wonderland, Wonderland' })
  })
  
  app.get('/next-one', (req, res) => {
    res.render('boogey', { title: 'Say Say Say', message: 'Paul, but Michael', content: 'All alone I sit home by the phone waiting for you baby (baby)<br> Through the years how can you stand to hear my pleading for you dear?<br>You know I\'m crying, ooh, ooh, ooh, ooh <br> Yeeaaahhh ' })
  })
  
  app.get('/next-two', (req, res) => {
    res.render('template', { title: 'If you think you\'re lonely now', message: 'Bobby Womack', content: 'When it\'s cold outside who are you holding?<br>You know, if y\'all don\'t mind I\'d like to talk about this woman of mine<br>She\'s always complainin bout me never bein at home<br>But when I\'m there I\'m broke' })
  })

  app.get('/next-three', (req, res) => {
    res.render('template', { title: 'Living for the love of you', message: 'Isley Brothers', content: 'Driftin on a memory<br>Ain\'t no place I\'d rather be<br>Than with you, yeah<br>Lovin\' you, well, well, well<br>Day will make a way for night<br>All we\'ll need is candlelight<br>And a song, yeah<br>Soft and long, well, ooh<br>Glad to be<br>    Here, alone, with a lover unlike no other<br>Sad to see<br>A new horizon slowly comin\' into view, yeah<br>I wanna be livin\'<br>For the love of you, oh, yes, I am<br>All that I\'m givin\'<br>Is for the love of you, alright now' })
  })

  app.get('/next-four', (req, res) => {
    res.render('template', { title: 'Here and Now', message: 'Luther Vandross', content: 'One look in your eyes and there I see<br>Just what you mean to me<br>Here in my heart I believe<br>Your love is all I\'ll ever need<br>Holdin\' you close through the night<br>I need you, yeah<br>I look in your eyes and there I see<br>What happiness really means<br> The love that we share makes life so sweet<br>Together we\'ll always be<br>This pledge of love feels so right<br>And, ooh, I need you<br>Here and now<br>I promise to love faithfully (Faithfully)<br>You\'re all I need<br>Here and now<br>I vow to be one with thee (You and me), hey<br>Your love is all (I need) I need' })
  })

  app.get('/next-five', (req, res) => {
    res.render('template', { title: 'Human Nature', message: 'Michael Jackson', content: 'Looking out, across the nighttime<br>The city winks a sleepless eye<br>Hear her voice, shake my window<br>Sweet seducing sighs<br>Get me out, into the nighttime<br>Four walls won\'t hold me tonight<br>If this town is just an apple<br>Then let me take a bite<br>If they say why (why?), why (why?)<br>Tell them that it\'s human nature<br>Why (why?), why (why?), does he do me that way?<br>If they say why (why?), why (why?)<br>Tell them that it\'s human nature<br>Why (why?), why (why?), does he do me that way? ' })
  })

  app.get('/next-six', (req, res) => {
    res.render('template', { title: 'Nursey Rhymes', message: 'Itsy Bitsy Spider', content: 'The itsy bitsy spider crawled up the water spout.<br>Down came the rain, and washed the spider out.<br>Out came the sun, and dried up all the rain,<br>and the itsy bitsy spider went up the spout again' })
  })

  app.get('/next-seven', (req, res) => {
    res.render('template', { title: 'Nursey Rhymes', message: 'Eeny, meeny, miny, moe', content: 'Eeny, meeny, miny, moe<br>Catch a tiger by the toe<br>If he hollers let him go,<br>Eeny, meeny, miny, moe<br>My mother told me<br>To pick the very best one<br>And you are [not] it.' })
  })

  app.get('/next-eight', (req, res) => {
    res.render('template', { title: 'Nursey Rhymes', message: 'Ring around a Rosie', content: 'Ring-a-round the rosie,<br>A pocket full of posies,<br>Ashes! Ashes!<br>We all fall down' })
  })

  app.get('/next-nine', (req, res) => {
    res.render('template', { title: 'Nursey Rhymes', message: 'Baa, Baa, Black Sheep', content: 'Baa, baa, black sheep<br>Have you any wool?<br>Yes sir, yes, sir<br> Three bags full<br>One for the master<br>One for the dame<br>And one for the little boy<br>Who lives down the lane' })
  })

// Tell the app to listen on port 3001
app.listen(3001, function() {
 console.log('Listening on port 3001');
});