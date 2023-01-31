// Book

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

import {Book, Pearson} from './interfaces';

type BookProperties = keyof Book;
type PersonBook = Pearson & Book;
type BookOrUndefined = Book | undefined;

type TOptions = {
    duration?: number;
    speed?: number;
};

export {BookProperties, PersonBook, BookOrUndefined, TOptions};