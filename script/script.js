const library = new Library;

addBook.onclick = function(){
    if(isbn.value && title.value && author.value && year.value){
    const book = new Book(isbn.value.trim(), title.value.trim(), author.value.trim(), year.value);
    library.addBook(book);
    }
    else{
        alert('all fields must be filled');
    }  
}