let books = [];

// Function to add book details in the management system
function addBook() {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            author: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert("Please fill in all fields correctly.");
    }
}

// Function to show book details in management system
function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Auhtor Name: </strong>${book.author}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>No. of Pages: </strong>${book.pagesNumber}</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById("books").innerHTML = booksDiv.join("");
}

// Function to edit book details in management system
function editBook(index) {
    const book = books[index];
    document.getElementById("bookName").value = book.name;
    document.getElementById("authorName").value = book.authorName;
    document.getElementById("bookDescription").value = book.bookDescription;
    document.getElementById("pagesNumber").value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showBooks(); // Refresh list
}

// Function to delete books in management system
function deleteBook(index) {
    // Remove the book entry at the give index
    books.splice(index, 1);
    showBooks(); // Refresh the book list after deletion
}

// Function to clear inputs
function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}