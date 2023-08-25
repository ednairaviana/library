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