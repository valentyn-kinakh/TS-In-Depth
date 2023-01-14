showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Book

type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

// Category

enum Category {
    JavaScript = 'JavaScript',
    CSS = 'CSS',
    HTML = 'HTML',
    TypeScript = 'TypeScript',
    Angular = 'Angular'
}

function getAllBooks(): Book[] {
    return [
        {
            id: 1,
            title: 'Refactoring JavaScript',
            author: 'Evan Burchard',
            available: true,
            category: Category.JavaScript
        },
        {
            id: 2,
            title: 'JavaScript Testing',
            author: 'Liang Yuxian Eugene',
            available: false,
            category: Category.JavaScript
        },
        {id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS},
        {
            id: 4,
            title: 'Mastering JavaScript Object-Oriented Programming',
            author: 'Andrea Chiarelli',
            available: true,
            category: Category.HTML
        }
    ];
}

const books = getAllBooks();

function logFirstAvailable(books: Book[]): void {
    const length = books.length;

    console.log('Length: ', length);
    console.log('Book title: ', books[0].title);
}

logFirstAvailable(books);

function getBookTitlesByCategory(category: Category): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

function logBookTitles(titles: string[]): void {
    console.log('Titles: ', titles);
}

logBookTitles(getBookTitlesByCategory(Category.JavaScript));

function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    if (!book) return undefined;

    const {title, author} = book;
    return [title, author];
}

console.log('Book:', getBookAuthorByIndex(1));

function calcTotalPages(): bigint {
    const books = [{lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return BigInt(books.reduce((accumulator, currentValue) => accumulator + currentValue.avgPagesPerBook, 0));
}

console.log('Total pages: ', calcTotalPages());
