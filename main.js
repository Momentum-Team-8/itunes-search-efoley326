const url = 'https://proxy-itunes-api.glitch.me/search?term=${artistSearch.value}&limit=15&media=music&entity=song'

const page = document.querySelector('body')

const placeholder = document.querySelector('input')

const url = `https://proxy-itunes-api.glitch.me/search?term=${artistSearch.value}&limit=15&media=music&entity=song`

function createCards (text, text, _img) {
    fetch (url, {
        method: "POST",
        headers: {"Content-Type" : "application/JSON"} ,
        page: JSON.stringify({
            Artist: artistTerm,
            Song: songTerm,
            Album: albumTerm
        })
        })
        .then (response => response.json())
        .then (data => renderResults(data))
        .then (console.log (banana))
}









function retrieveResults(data) {
    fetch(url)
    .then(response => response.json)
    .then(data => renderResults(data))
    }

page.addEventListener('submit', event => {
    event.preventDefault()
    createCards(placeholder.value)
})

// available attributes: mixTerm, 
//genreIndex, artistTerm, composerTerm, albumTerm, ratingIndex, songTerm

function renderResults (data) {
    const searchResults = document.createElement("li")
    searchResults.id = data.id
    renderArtistTerm(searchResults, data) 
    musicInfo.appendChild(searchResults)
}


