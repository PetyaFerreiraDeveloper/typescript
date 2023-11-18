class LibraryCollection {
    constructor(capacity) {
        this.books = [];
        this.capacity = capacity;
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            return "Not enough space in the collection.";
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        const currentBook = this.books.find((book) => book.bookName === bookName);
        if (currentBook === undefined) {
            return `${bookName} is not in the collection.`;
        }
        if (currentBook.payed) {
            return `${bookName} has already been paid.`;
        }
        const currentBookIndex = this.books.findIndex((book) => book.bookName === bookName);
        this.books[currentBookIndex].payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        const currentBook = this.books.find((book) => book.bookName === bookName);
        if (currentBook === undefined) {
            return "The book, you're looking for, is not found.";
        }
        if (currentBook.payed === false) {
            return `${bookName} need to be paid before removing from the collection.`;
        }
        const currentBookIndex = this.books.findIndex((book) => book.bookName === bookName);
        this.books.splice(currentBookIndex, 1);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        const emptySlots = this.capacity - this.books.length;
        this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
        if (bookAuthor === undefined) {
            return `The book collection has ${emptySlots} empty spots left. \n${this.books
                .map((book) => `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}`)
                .join("\n")}`;
        }
        if (!this.books.some((book) => book.bookAuthor === bookAuthor)) {
            return `${bookAuthor} is not in the collection.`;
        }
        const authorBooks = this.books.filter((book) => book.bookAuthor === bookAuthor);
        return `${authorBooks
            .map((book) => `${book.bookName} == ${book.bookAuthor} - ${book.payed ? "Has Paid" : "Not Paid"}`)
            .join("\n")}`;
    }
}
const library = new LibraryCollection(2);
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
//# sourceMappingURL=index.js.map