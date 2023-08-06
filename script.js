const button = document.querySelector(".main-btn");
const bookContainer = document.querySelector(".book-container");

const ttlInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");

button.addEventListener("click", () => {
    createBookCard("Título Foda", "Autor Foda", "123");
    if (validateForm() == false) {
        return
    } else {
        createBookCard(ttlInput.value, authorInput.value, pagesInput.value);
        clearInput();
    }
});

function createBookCard(title, author, pages) {
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
    readBtn.innerText = "read/not read";
    delIcon.innerHTML = "delete";
    bookContainer.insertAdjacentElement("beforeend", bookCard);

    delIcon.addEventListener("click", () => {
        bookCard.onclick = function(e) { this.parentNode.removeChild(this) };
    })
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

function Book(title, author, page) {
    this.title = title
    this.author = author
    this.page = page
}

const amor = new Book("amor", "amor", "amor");
const love = new Book("amor", "amor", "amor");

console.log(love);

