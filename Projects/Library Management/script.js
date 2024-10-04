// Library object to store books
const library = {
    books: [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true },
        { id: 3, title: "1984", author: "George Orwell", year: 1949, isAvailable: true }
    ]
};

// Function to list all books
function listBooks() {
    console.log("Books in Library:");
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        console.log(`${book.id}. ${book.title} by ${book.author} (${book.year}) - ${book.isAvailable ? "Available" : "Borrowed"}`);
    }
}

// Function to add a new book
function addBook(title, author, year) {
    const newBook = {
        id: library.books.length + 1,
        title: title,
        author: author,
        year: year,
        isAvailable: true
    };
    library.books.push(newBook);
    console.log(`New book added: ${title} by ${author} (${year})`);
}

// Function to borrow a book
function borrowBook(id) {
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].id === id) {
            if (library.books[i].isAvailable) {
                library.books[i].isAvailable = false;
                console.log(`You borrowed "${library.books[i].title}" by ${library.books[i].author}.`);
            } else {
                console.log(`"${library.books[i].title}" is currently unavailable.`);
            }
            return;
        }
    }
    console.log("Book not found.");
}

// Function to return a book
function returnBook(id) {
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].id === id) {
            if (!library.books[i].isAvailable) {
                library.books[i].isAvailable = true;
                console.log(`You returned "${library.books[i].title}".`);
            } else {
                console.log(`"${library.books[i].title}" was not borrowed.`);
            }
            return;
        }
    }
    console.log("Book not found.");
}



// Function to find a book by title
function findBook(title) {
    for (let i = 0; i < library.books.length; i++) {
        if (library.books[i].title.toLowerCase() === title.toLowerCase()) {
            const book = library.books[i];
            console.log(`Book found: "${book.title}" by ${book.author} (${book.year}) - ${book.isAvailable ? "Available" : "Borrowed"}`);
            return;
        }
    }
    console.log("Book not found.");
}




listBooks()

// Add a new book to the library
addBook("The Catcher in the Rye", "J.D. Salinger", 1951);

// // Borrow a book by its ID
borrowBook(1);

// // Try borrowing the same book again
borrowBook(1);

// // Return the borrowed book
returnBook(1);

// // Try borrowing the same book again
borrowBook(1);


// Search for a book by title
findBook("test")