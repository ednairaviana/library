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

const domFunctions = (function() {
    const bookContainer = document.querySelector(".book-container");

    function createBookCard(title, author, pages, read, idCard) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookContainer.insertAdjacentElement("beforeend", bookCard);
        bookCard.setAttribute("data-id", idCard);
    
        bookCard.innerHTML = `
            <div>
                <h2 id="title-card"></h2>
                <p id="author-card"></p>
                <p id="pages-card"></p>
            </div>
            <div class="btn-card">
                <p class="btn-read" style="background-color: green;">READ</p>
                <span class="material-symbols-outlined">delete</span>
            </div>`;
    
        const ttlCard = bookCard.querySelector("#title-card");
        const authorCard = bookCard.querySelector("#author-card");
        const pagesCard = bookCard.querySelector("#pages-card");
        const btnRead = bookCard.querySelector(".btn-read")
        const btnDelete = bookCard.querySelector("span");
    
        ttlCard.innerText = title;
        authorCard.innerText = author;
        pagesCard.innerText = `${pages} pages`;

        changeBtnRead();

        btnRead.addEventListener("click", () => {
            bookCard.onclick = function(e) {
                isRead(this.dataset.id);
                read = library[this.dataset.id].read;
                changeBtnRead();
            }
        });

        btnDelete.addEventListener("click", () => {
            bookCard.onclick = function(e) {
                deleteBook(this.dataset.id);
                renderBooks();
            }
        });

        function changeBtnRead() {
            if(read == true) {
                btnRead.style.backgroundColor = "green";
                btnRead.innerText = "READ";
            } else {
                btnRead.style.backgroundColor = "red";
                btnRead.innerText = "NOT READ";
            }
        }
    }

    function renderBooks() {
        while(bookContainer.firstChild) {
            bookContainer.removeChild(bookContainer.firstChild);
        }
        for (i = 0; i < library.length; i++) {
            createBookCard(library[i].title, library[i].author, library[i].pages, library[i].read, i);
        }
    }

    return {renderBooks, createBookCard}
})()

const testGrid = (function() {
    const gridbtn = document.querySelector("#grid-btn");
    gridbtn.addEventListener("click", () => {
        domFunctions.createBookCard("Title", "Author", "123", true);
    });
})();