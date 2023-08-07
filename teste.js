const button = document.querySelector(".main-btn");
const ttlInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

let bookTtl = ttlInput.value;
let bookAuthor = authorInput.value;
let bookPages = pagesInput.value;

function Book(title, author, page) {
    this.title = title
    this.author = author
    this.page = page
}

button.addEventListener("click", () => {
    createBookCard("Título Foda", "Autor Foda", "123");
    if (validateForm() == false) {
        return
    } else {
        function createObject(bookTtl, bookAuthor, bookPages);
    }
});

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

function createObject(title, author, page) {
    const obj = new Book(title, author, page);
    console.log(this);
}