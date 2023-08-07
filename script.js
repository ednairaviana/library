const button = document.querySelector(".main-btn");
const bookContainer = document.querySelector(".book-container");
const ttlInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

const library = [];

class Book {
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

button.addEventListener("click", () => {
    if (validateForm() == false) {
        return
    } else {
        readOrNot();
        addBookToLibrary();
        renderBooks();
        console.log(library);
        clearInput();
    }
});

function createBookCard(title, author, pages, read, id) {
    const bookCard = document.createElement("div");
    const divText = document.createElement("div");
    const titleCard = document.createElement("h2");
    const authorCard = document.createElement("p");
    const pagesCard = document.createElement("p");
    const divBtn = document.createElement("div");
    const readBtn = document.createElement("p");
    const delIcon = document.createElement("span");

    bookCard.classList.add("book-card");
    divBtn.classList.add("btn-card");
    readBtn.classList.add("btn-read");
    delIcon.classList.add("material-symbols-outlined");

    bookCard.insertAdjacentElement("beforeend", divText);
    divText.insertAdjacentElement("beforeend", titleCard);
    divText.insertAdjacentElement("beforeend", authorCard);
    divText.insertAdjacentElement("beforeend", pagesCard);
    bookCard.insertAdjacentElement("beforeend", divBtn);
    divBtn.insertAdjacentElement("beforeend", readBtn);
    divBtn.insertAdjacentElement("beforeend", delIcon);

    titleCard.innerText = title;
    authorCard.innerText = author;
    pagesCard.innerText = `${pages} pages`;
    readBtn.innerText = read;
    delIcon.innerHTML = "delete";
    bookContainer.insertAdjacentElement("beforeend", bookCard);
    bookCard.setAttribute("data-id", id);

    if (read == "READ") {
        readBtn.style.backgroundColor = "green";
    } else {
        readBtn.style.backgroundColor = "red";
    }

    readBtn.addEventListener("click", () => {
        if(readBtn.innerText == "READ") {
            readBtn.innerText = "NOT READ";
            readBtn.style.backgroundColor = "red";
        } else {
            readBtn.innerText = "READ";
            readBtn.style.backgroundColor = "green";
        }
    });

    delIcon.addEventListener("click", () => {
        bookCard.onclick = function(e) {
            this.parentNode.removeChild(this);
            let bookId = parseInt(this.dataset.id);
            library.splice(bookId, bookId);
        };
    })
}

function readOrNot() {
    if(document.getElementById("read").checked) {
        return "READ"
    } else {
        return "NOT READ"
    }
}

function clearInput() {
    ttlInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
}

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

function addBookToLibrary() {
    const newBook = new Book(ttlInput.value, authorInput.value, pagesInput.value, readOrNot());
    library.push(newBook);
}

function renderBooks() {
    removeAllChildNodes(bookContainer);
    for (i = 0; i < library.length; i++) {
        createBookCard(library[i].title, library[i].author, library[i].pages, library[i].read, i);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}