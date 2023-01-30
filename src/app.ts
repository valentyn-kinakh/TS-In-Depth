/* eslint-disable no-redeclare */

// eslint-disable-next-line no-underscore-dangle

showHello('greeting', 'TypeScript');

// Task 01 & 02
function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// Book

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markedDamaged?: DamageLogger;
}

// Category

enum Category {
    JavaScript = 'JavaScript',
    CSS = 'CSS',
    HTML = 'HTML',
    TypeScript = 'TypeScript',
    Angular = 'Angular'
}

function getAllBooks(): readonly Book[] {
    const books = <const>[
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

    return books;
}

const books = getAllBooks();

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const availableBooks = books.filter(book => book.available);

    console.log('Length: ', availableBooks.length);
    console.log('Book title: ', availableBooks[0]?.title);
}

logFirstAvailable(books);

function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
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

// console.log('Book:', getBookAuthorByIndex(1));

function calcTotalPages(): bigint {
    const books = <const>[{lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return BigInt(books.reduce((accumulator, currentValue) => accumulator + currentValue.avgPagesPerBook, 0));
}

// console.log('Total pages: ', calcTotalPages());

// Task 03
function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

function getBookByID(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(({id}) => id === pid);
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs.map(id => getBookByID(id)).filter(({available}) => available).map(({title}) => title);
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(({author}) => author === arg).map(({title}) => title);
        } else if (typeof arg === 'boolean') {
            return books.filter(({available}) => available).map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id).map(({title}) => title);
        }
    }

    return [];
}

function assertStringValue(arg: any): boolean | Error {
    if (typeof arg === 'string') {
        return true;
    }

    throw new Error('value should have been a string');
}

function bookTitleTransform(name: any): string | undefined {
    if (assertStringValue(name)) {
        return (name as string).split('').reverse().join('');
    }
}

// console.log('Title reverse: ',bookTitleTransform('test'));
// console.log('Title reverse: ',bookTitleTransform(5));


// const myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) =>`${id}-${name}`;
// idGenerator = createCustomerID;
//
// console.log(idGenerator('Ann', 10));

// createCustomer('Anna');
// createCustomer('Anna', 20);
// createCustomer('Anna', 20, 'Lviv');

// logFirstAvailable();

//
// const myBooks = checkoutBooks('Ann',1,2,4);

// const checkedOutBooks = getTitles(false);

function printBook(book: Book): void {
    const {title, author} = book;

    console.log(`${title} ${author}`);
}

const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markedDamaged: (reason) => console.log(`Damaged: ${reason}`)
};

printBook(myBook);

myBook.markedDamaged('missing back cover');

interface DamageLogger {
    (str: string): void;
}

const logDamage: DamageLogger = myBook.markedDamaged;

// console.log('missing back cover');

interface Pearson {
    name: string;
    email: string;
}

interface Author extends Pearson {
    numBooksPublished: number;
}

interface Librarian extends Pearson {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

const favouriteAuthor: Author = {
    name: 'Test',
    email: 'test@email.com',
    numBooksPublished: 100
};

// const favouriteLibrarian: Librarian = {
//     name: 'Test',
//     email: 'test@email.com',
//     department: 'udhdb',
//     assistCustomer: (custName, bookTitle) => console.log('')
// };

const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer?.book?.getTitle());
// console.log(offer?.book?.authors[0]);

type BookProperties = keyof Book;

function getProperty(book: Book, property: BookProperties): any {
    return books[property];
}

// console.log('Property: ', getProperty(myBook, 'title'));
// console.log('Property: ', getProperty(myBook, 'markedDamaged'));
// console.log('Property: ', getProperty(myBook, 'isbn'));

abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Crete new reference item');
    //
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    #id: number;


    static department: string = 'Research dep...';

    protected constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
        console.log('Crete new reference item');
    }

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}, dep: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}


class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

const ref: ReferenceItem = new Encyclopedia(1, 'Typescript', 2023, 2);
ref.publisher = 'test_publisher';
console.log(ref);
ref.printItem();

console.log(ref.publisher);

ref.getID();


const refBook = new Encyclopedia(2, 'Js', 2020, 4);
console.log(refBook);

refBook.printCitation();


class UniversityLibrarian implements Librarian {
    constructor(public name, public email, public department) {
    }

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}

const favouriteLibrarian = new UniversityLibrarian('test', 'test@email.com', 'dep1');
favouriteLibrarian.assistCustomer('customer', 'book title');

type PersonBook = Pearson & Book;

const personBook: PersonBook = {
    name: '',
    email: '',
    id: 3,
    title: '',
    author: '',
    available: true,
    category: Category.JavaScript
};

console.log(personBook);

type BookOrUndefined = Book | undefined;

type TOptions = {
    duration?: number;
    speed?: number;
};

function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 10.9;
    options.speed ??= 225;

    return options;
}

console.log(setDefaultConfig({}));
