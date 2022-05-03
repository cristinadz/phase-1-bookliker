document.addEventListener("DOMContentLoaded", function() {});

fetch('http://localhost:3000/books')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(function(element) {
            document.createElement('li')
            document.getElementById('list').append('li')
        })
    })

let turnBookIntoLi = book => {
    let bookLi = document.createElement('li')
    bookLi.textContent = book.title
}