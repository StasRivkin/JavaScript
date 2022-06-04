class Library {
    constructor() {
        this._books = [];
    }

    get books() {
        return [...this._books];
    }

    addBook(book) {
        const index = this._books.findIndex(e => e.isbn === book.isbn);
        if (index < 0) {
            this._books.push(book);
            const li = createInfoElement(book.toString(), 'li');
            const buttonDel = createInfoElement('X', 'button');
            buttonDel.onclick = function ({ target }) {
                target.parentElement.remove();
                library.removeBook(book.isbn);
                if (library._books.length !== 0) {
                   toStats();
                }
                else{
                    toCollor();
                }
            };
            li.append(buttonDel);
            allBooks.append(li);
            allValues();
            clearStats();
            toStats();
            toCollor();
        }
        else {
            return alert(`Book with isbn = ${book.isbn} exists`);
        }
    }

    removeBook(isbn) {
        const index = this._books.findIndex(e => e.isbn === isbn);
        if (index >= 0) {
            this._books.splice(index, 1);
            clearStats();
        }
        return index >= 0;
    }

    booksIn() {
        return `Amount of books in library is ${this._books.length}`
    }

    oldestIn() {
        let res = this._books.reduce((prev, curv) => prev < curv.year ? prev : curv.year, library._books[0].year);
        const index = this._books.findIndex(e => e.year === res);
        return `The oldest book in library is ${index + 1} book`;
    }

    youngestIn(){
        let res = this._books.reduce((prev, curv) => prev > curv.year ? prev : curv.year, library._books[0].year);
        const index = this._books.findIndex(e => e.year === res);
        return `The youngest book in library is ${index + 1} book`;
    }

}