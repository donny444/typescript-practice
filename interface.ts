interface Biography {
    id: number;
    name: string;
    age: number;
    weight: number;
    height: number;
}

function checkBiography(biography: Biography): void {
    console.log(biography);
}

function changeName(biography: Biography, name: string): void {
    biography.name = name;
}

class Book {
    id: number;
    title: string;
    pages: number;
    author: string;
    isbn: string;

    constructor(id: number, title: string, pages: number, author: string, isbn: string) {
        this.id = id;
        this.title = title;
        this.pages = pages;
        this.author = author;
        this.isbn = isbn;
    }
}

let book: Book = new Book(1, "The Great Gatsby", 180, "F. Scott Fitzgerald", "978-0743273565");