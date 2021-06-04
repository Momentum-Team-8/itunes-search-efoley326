const url = "https://itunes.apple.com/search?"
const form = document.querySelector("form")
const page = document.getElementById("page")
const searchBar = document.getElementById("New-Search")
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const resultGrid = document.getElementById("results")

//variables ^^^^^^^^^^^^^^^^^^^^^^


//functions vvvvvvvvvvvvvvvvvvvvvv
function retrieveResults() {
    const barInput = searchBar.value
    fetch (url + 'term=' + `${barInput}` + '&limit=20' + '&entity=song')
    .then(res => res.json())
    .then (data => {
        for (let x of data.results){
            createResults(x)
}
})
}

function createResults (data) {
    const resultCard = document.createElement('li')
    resultCard.classList.add('card')
    resultGrid.appendChild(resultCard)

    const artistName = document.createElement('div')
    artistName.classList.add('artistname')
    resultCard.appendChild(artistName)
    artistName.innerHTML = data.artistName

    const trackName = document.createElement('div')
    trackName.classList.add('songname')
    resultCard.appendChild(trackName)
    trackName.innerHTML= data.trackName

    const albumArt = document.createElement('img')
    albumArt.classList.add('albumart')
    resultCard.appendChild(albumArt)
    albumArt.src = data.artworkUrl100

    const preview = document.createElement('source')
    const audio = document.createElement('audio')
    resultCard.appendChild(preview)
    preview.controls = true
    preview.src = data.previewUrl
    audio.appendChild(preview)
}


// search bar and submit button
form.addEventListener('submit', event => {
    event.preventDefault()
    retrieveResults()
}
)