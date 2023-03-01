/* eslint-disable no-redeclare */

// eslint-disable-next-line no-underscore-dangle

import {Category} from './enum';
import {Book, Callback, LibMgrCallback} from './interfaces';
import {BookOrUndefined, TOptions} from './types';
import {ReferenceItem} from './classes';

export function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


export function getAllBooks(): readonly Book[] {
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

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(book => book.category === category).map(book => book.title);
}

export function logBookTitles(titles: string[]): void {
    console.log('Titles: ', titles);
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const availableBooks = books.filter(book => book.available);

    console.log('Length: ', availableBooks.length);
    console.log('Book title: ', availableBooks[0]?.title);
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    if (!book) return undefined;

    const {title, author} = book;
    return [title, author];
}

// console.log('Book:', getBookAuthorByIndex(1));

export function calcTotalPages(): bigint {
    const books = <const>[{lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250},
        {lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300},
        {lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280}
    ];

    return BigInt(books.reduce((accumulator, currentValue) => accumulator + currentValue.avgPagesPerBook, 0));
}

// console.log('Total pages: ', calcTotalPages());

// Task 03
export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if (age) {
        console.log(`Customer age: ${age}`);
    }

    if (city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return books.find(({id}) => id === pid);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs.map(id => getBookByID(id)).filter(({available}) => available).map(({title}) => title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
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

export function assertStringValue(arg: any): boolean | Error {
    if (typeof arg === 'string') {
        return true;
    }

    throw new Error('value should have been a string');
}

export function bookTitleTransform(name: any): string | undefined {
    if (assertStringValue(name)) {
        return (name as string).split('').reverse().join('');
    }
}

export function printBook(book: Book): void {
    const {title, author} = book;

    console.log(`${title} ${author}`);
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 10.9;
    options.speed ??= 225;

    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof ReferenceItem);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(object: TObject, prop: TKey): TObject[TKey] | string {
    const value = object[prop];

    return typeof value === 'function' ? value.name : value;
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    // export function getBooksByCategory(category: Category, callback: Callback<string>[]): void{
// }
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category){
    const results: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    console.log(results);
}
