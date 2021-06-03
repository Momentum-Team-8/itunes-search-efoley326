const url = 'https://proxy-itunes-api.glitch.me/search?term=${artistSearch.value}&limit=15&media=music&entity=song'
const page = document.querySelector('body')
const placeholder = document.querySelector('input')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')

//variables ^^^^^^^^^^^^^^^^^^^^^^
// available attributes: mixTerm, 
//genreIndex, artistTerm, composerTerm, albumTerm, ratingIndex, songTerm
//functions vvvvvvvvvvvvvvvvvvvvvv

function retrieveResults() {
    fetch(url + 'term=' + `${search}`)
    .then(response => response.json())
    .then(data => body.innerHTML)
}

function generateResults () {
    fetch (url, {
        method: "POST",
        page: JSON.stringify({
            Artist: artistTerm,
            Song: songTerm,
            Album: albumTerm
        })
        })
        .then (response => response.json())
        .then (data => renderResults(data))
    }

function renderResults () {
    const searchResults = document.createElement('li')
    searchResults.id = data.id
    searchResultsText (searchResults, data)
    songTitle.appendChild(searchResults)
}

function searchResultsText (searchResults, data)
{
    const controlButtons = document.createElement ('h2')
    const playButton = document.createElement ('button')
    playButton.innerHTML = "▶️"
    playButton.classList.add ("play")
    const pauseButton = document.createElement ('button')
    pauseButton.innerHTML = "⏸️ "
    pauseButton.classList.add ("pause")
    const stopButton = document.createElement ('button')
    stopButton.innerHTML = "⏹️"
    stopButton.classList.add ("stop")
    controlButtons.appendChild(playButton)
    controlButtons.appendChild(pauseButton)
    controlButtons.appendChild(stopButton)
}

const song = document.createElement('audio')





.play.addEventListener ('click', event => {
    event.preventDefault();
    if (event.target.classList.contains("play")) {
        playSong(event.target)
    }
})
.pause.addEventListener ('click', event => {
    event.preventDefault();
    if (event.target.classList.contains("pause")) {
        pauseSong(event.target)
    }
})
playButton.addEventListener ('click', event => {
    event.preventDefault();
    if (event.target.classList.contains("stop")) {
        stopSong(event.target)
    }
})




page.addEventListener('submit', event => {
    event.preventDefault()
    renderResults(placeholder.value)
})
    


