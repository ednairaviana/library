let library = []

class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBook(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
}

function deleteBook(index) {
    library = library.filter(function(element) {
        return element != library[index];
    });
}

function isRead(index) {
    if (library[index].read == true) {
        library[index].read = false;
    } else {
        library[index].read = true;
    }
}

const form = (function() {
    const ttlInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
    const button = document.querySelector("#form-btn");

    button.addEventListener("click", () => {
        if (validateForm() == true) {
            addBook(ttlInput.value, authorInput.value, pagesInput.value, setRead());
            clearInput();
            domFunctions.renderBooks();
        }
    })

    function validateForm() {
        const spanTitle = document.querySelector("#span-title");
        const spanAuthor = document.querySelector("#span-author");
        const spanPages = document.querySelector("#span-pages");
    
        spanTitle.innerText = "";
        spanAuthor.innerText = "";
        spanPages.innerText = "";
    
        if (ttlInput.value == "") {
            spanTitle.innerText = "What's the title?"
            return false;
        } else if (authorInput.value == "") {
            spanAuthor.innerText = "Who's the author?"
            return false;
        } else if (pagesInput.value == "") {
            spanPages.innerText = "How many pages?"
            return false
        } else {
            return true;
        }
    }

    function clearInput() {
        ttlInput.value = "";
        authorInput.value = "";
        pagesInput.value = "";
    }

    function setRead() {
        if(document.getElementById("read").checked) {
            return true;
        } else {
            return false;
        }
    }
})()