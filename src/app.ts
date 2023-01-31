/* eslint-disable no-redeclare */

// eslint-disable-next-line no-underscore-dangle

// showHello('greeting', 'TypeScript');

// Task 01 & 02

import {getAllBooks, printRefBook, setDefaultConfig} from './functions';
import {Author, Book, Logger} from './interfaces';
import {Category} from './enum';
import {BookProperties, PersonBook, TOptions} from './types';
import {ReferenceItem, UniversityLibrarian} from './classes/';
import {Encyclopedia as ReferenceBook} from './classes/encyclopedia';

const books = getAllBooks();

// logFirstAvailable(books);
//
//
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));



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


const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markedDamaged: (reason) => console.log(`Damaged: ${reason}`)
};

// printBook(myBook);

// myBook.markedDamaged('missing back cover');


const logDamage: Logger = myBook.markedDamaged;

// console.log('missing back cover');

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

function getProperty(book: Book, property: BookProperties): any {
    return books[property];
}

// console.log('Property: ', getProperty(myBook, 'title'));
// console.log('Property: ', getProperty(myBook, 'markedDamaged'));
// console.log('Property: ', getProperty(myBook, 'isbn'));



const ref: ReferenceItem = new ReferenceBook(1, 'Typescript', 2023, 2);
// ref.publisher = 'test_publisher';
// console.log(ref);
// ref.printItem();

printRefBook(ref);

// console.log(ref.publisher);
//
// ref.getID();


// const refBook = new Encyclopedia(2, 'Js', 2020, 4);
// console.log(refBook);
//
// refBook.printCitation();


const favouriteLibrarian = new UniversityLibrarian('test', 'test@email.com', 'dep1');
// favouriteLibrarian.assistCustomer('customer', 'book title');
printRefBook(favouriteLibrarian);

// const personBook: PersonBook = {
//     name: '',
//     email: '',
//     id: 3,
//     title: '',
//     author: '',
//     available: true,
//     category: Category.JavaScript
// };
//
// console.log(personBook);

// console.log(setDefaultConfig({}));
