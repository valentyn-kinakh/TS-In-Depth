// Book

// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

import {Author, Book, Pearson} from './interfaces';
import {createCustomer} from './functions';

type BookProperties = keyof Book;
type PersonBook = Pearson & Book;
type BookOrUndefined = Book | undefined;

type TOptions = {
    duration?: number;
    speed?: number;
};

export {BookProperties, PersonBook, BookOrUndefined, TOptions};

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author, 'email'>;
export type CreateCustomerFunctionType = typeof createCustomer;
