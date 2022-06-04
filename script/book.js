class Book {
    constructor(isbn, title, author, year){
        this._isbn = isbn;
        this._title = title;
        this._author = author;
        this._year = +year;
    }

    get isbn(){
        return this._isbn;
    }

    get title(){
        return this._title;
    }

    get author(){
        return this._author;
    }

    get year(){
        return this._year;
    }

    toString(){
        return `ISBN: ${this._isbn} Title: ${this._title} Author: ${this._author} Year: ${this._year}`;
    }
}