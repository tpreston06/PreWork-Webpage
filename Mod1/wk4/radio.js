const radio = {
    stations :[
        {
            name: 'Kiss 104.1',
            songs: [
                {title: 'There you go',
                 artist: 'Johnny Gill'},
                 {title: 'Why I love you so much',
                 artist: 'Monica'}
            ]
        },
        {
            name: '94.9 The Bull',
            songs: [
                {title: 'Wasted on You',
                artist: 'Morgan Wallen'},
                {title: 'T-shirt',
                artist: 'Morgan Wallen'}
            ]
        },
        {
            name: 'Hot 107.9',
            songs: [
                {title: 'Super Gremlin',
                artist: "Kodak Black"},
                {title: 'Gods Plan',
                artist: 'Drake'}
            ]
        }
    ],
    randomStation: function(){
        // get a random number from 0 -stations.length
        //use the random number as an index in the stations array
        let stationLength = this.stations.length 
        let randomNum = Math.floor(Math.random() * stationLength) //generate a random number from 0-1
        // return (this.stations[randomNum])
         let randomStation = (this.stations[randomNum])
         let randomSong = Math.floor(Math.random() * this.stations[randomNum].songs.length)
        return (randomStation.songs[0]) //th first song obj of a random station'
             
    }
}

  console.log(radio.randomStation())