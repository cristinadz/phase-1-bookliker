document.addEventListener("DOMContentLoaded", function() {});

fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(element) {
            // document.createElement('li')
            // document.getElementById('list').append('li')
            turnBookIntoLi(element)
        })
    })


const renderBook = book => {
    let bookCard = document.createElement('div')
    let img = document.createElement('img')
    let title = document.createElement('h2')
    let subtitle = document.createElement('h2')
    let author = document.createElement('h2')
    let description = document.createElement('p')

    title.textContent = book.title
    img.src = book.img_url
    subtitle.textContent = book.subtitle
    author.textContent = book.author
    description.textContent = book.description
}

const turnBookIntoLi = book => {
    let bookLi = document.createElement('li')
    bookLi.textContent = book.title
    document.getElementById('list').append(bookLi)
    bookLi.addEventListener('click', () => renderBook(book))
}