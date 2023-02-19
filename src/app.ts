/* eslint-disable no-redeclare */

// eslint-disable-next-line no-underscore-dangle

// showHello('greeting', 'TypeScript');

// Task 01 & 02

import {createCustomer, getAllBooks} from './functions';
import {Author, Book, Logger, Magazine} from './interfaces';
import {Category} from './enum';
import {BookProperties, BookRequiredFields, CreateCustomerFunctionType, UpdatedBook} from './types';
import Shelf, {ReferenceItem, UniversityLibrarian} from './classes/';
import {Encyclopedia, Encyclopedia as ReferenceBook} from './classes/encyclopedia';

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


// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markedDamaged: (reason) => console.log(`Damaged: ${reason}`)
// };

// printBook(myBook);

// myBook.markedDamaged('missing back cover');

//
// const logDamage: Logger = myBook.markedDamaged;

// console.log('missing back cover');

// const favouriteAuthor: Author = {
//     name: 'Test',
//     email: 'test@email.com',
//     numBooksPublished: 100
// };

// const favouriteLibrarian: Librarian = {
//     name: 'Test',
//     email: 'test@email.com',
//     department: 'udhdb',
//     assistCustomer: (custName, bookTitle) => console.log('')
// };

// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer?.magazine);
// console.log(offer?.magazine?.getTitle());
// console.log(offer?.book?.getTitle());
// console.log(offer?.book?.authors[0]);

// function getProperty(book: Book, property: BookProperties): any {
//     return books[property];
// }

// console.log('Property: ', getProperty(myBook, 'title'));
// console.log('Property: ', getProperty(myBook, 'markedDamaged'));
// console.log('Property: ', getProperty(myBook, 'isbn'));


// const ref: ReferenceItem = new ReferenceBook(1, 'Typescript', 2023, 2);
// ref.publisher = 'test_publisher';
// console.log(ref);
// ref.printItem();

// printRefBook(ref);

// console.log(ref.publisher);
//
// ref.getID();


// const refBook = new Encyclopedia(2, 'Js', 2020, 4);
// console.log(refBook);
//
// refBook.printCitation();


// const favouriteLibrarian = new UniversityLibrarian('test', 'test@email.com', 'dep1');
// favouriteLibrarian.assistCustomer('customer', 'book title');
// printRefBook(favouriteLibrarian);

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


// const flag = true;

// if (flag) {
//     import('./classes').then(module => {
//         const reader = new module.Reader();
//         reader.name = 'User';
//         console.log(reader);
//     }).catch(err => console.error(err));
// }

// if (flag) {
//     const module = await import('./classes');
//     const reader = new module.Reader();
//     reader.name = 'User';
//     console.log(reader);
// }

// const inverntory = [
//     {id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.JavaScript},
//     {id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.TypeScript},
//     {id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.HTML},
//     {id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Angular}
// ];
//
// const magazines = [
//     {title: 'Programming Language Monthly', publisher: 'Code Mags'},
//     {title: 'Literary Fiction Quarterly', publisher: 'College Press'},
//     {title: 'Five Points', publisher: 'GSU'}
// ];


// let lib: Library = new Library();

// const r: Book[] = purge(inverntory);

// const bookShelf = new Shelf<Book>();
// inverntory.forEach(item => bookShelf.add(item));

// console.log(bookShelf.getFirst());

// const magazineShelf = new Shelf<Magazine>();
//
// magazines.forEach(item => magazineShelf.add(item));

// console.log(magazineShelf.getFirst());

// magazineShelf.printTitles();
//
// console.log(magazineShelf.find('Five Points'));

// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Test',
//     available: false,
//     category: Category.HTML,
//     markedDamaged: null,
//     pages: 200,
//     title: 'Titlle'
// };
//
// const updatedBook: UpdatedBook = {
//     available: true
// };
//
//
// const params: Parameters<CreateCustomerFunctionType> = ['Name', 30, 'Lviv'];
//
// createCustomer(...params);

// const ul = new UniversityLibrarian();
// console.log(ul);
//
// Object.getPrototypeOf(ul).assistFaculty = null;
// Object.getPrototypeOf(ul).teachCommunity = null;

// const encyclopedia = new Encyclopedia(1, 'Title', 2000, 1);
//
// encyclopedia.printItem();

const ul = new UniversityLibrarian();

ul.assistCustomer('Boris', 'Learn js');
