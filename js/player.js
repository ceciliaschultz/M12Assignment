// M12 Assignment- Music Player
// Maria Cecilia Schultz

const $ = (id) => document.getElementById(id)

// DOM elements
let btnPlay = $('btnPlay')
let btnShowFavorite = $('btnShowFavorite')
let selAlbum= $('selAlbum')
let favoriteAlbum = $('favoriteAlbum') // p tag to show favorite album
let message= $('message') // p tag to give feedback when playing album

let jbox 

class Jukebox {
    constructor() {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            let currentAlbum = this.albums[i]
            if (currentAlbum.played > max) {
                max = currentAlbum.played
                fav = currentAlbum
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
        message.innerHTML=`Playing: \'${this.title}\' by ${this.artist}..`
    }
    display = function() {
        return `Your favorite album is: ${this.title} by ${this.artist}. It has been played ${this.played} times.`
    }
}

// Plays an album. Keeps track of how many times album is being played
const  playHandler = () => {
    let selectedIdx =selAlbum.selectedIndex

    jbox.albums[selectedIdx].play()
}

// print the favorite album and # times played 
const showFavoriteHandler = ()  => {
    message.innerHTML=''  // clear playing message
    favoriteAlbum.innerHTML=jbox.favoriteAlbum()  // show favorite album & play count
}


function loadAlbums() {
    jbox= new Jukebox()
    jbox.addAlbum(new Album('Lana del Rey','Blue Banisters'))
    jbox.addAlbum(new Album('Queen','A Night at the Opera'))
    jbox.addAlbum(new Album('Rolling Stones','Goat Soup'))
    jbox.addAlbum(new Album('Taylor Swift','Reputation'))

    // populate dropdown
    let options= jbox.albums.map(a => `<option value="${a.artist}- ${a.title}"> ${a.artist}- ${a.title}</option>`).join('\n')
    selAlbum.innerHTML=options
}

window.addEventListener('load', () => {
    loadAlbums()
    btnPlay.addEventListener('click', playHandler)
    btnShowFavorite.addEventListener('click', showFavoriteHandler)
})

