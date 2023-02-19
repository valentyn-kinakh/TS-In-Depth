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

export type fn = (a: string, b: number, c: boolean) => symbol;
export type Param1<T> = T extends (a: infer U, b: number, c: boolean) => symbol ? U : never;
export type Param2<T> = T extends (a: string, b: infer U, c: boolean) => symbol ? U : never;
export type Param3<T> = T extends (a: string, b: number, c: infer U) => symbol ? U : never;

export type P1 = Param1<fn>;
export type P2 = Param2<fn>;
export type P3 = Param3<fn>;

export type RequiredProps<T extends  object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? never : prop;
}[keyof T];

export type OptionalProps<T extends  object> = {
    [prop in keyof T]: {} extends Pick<T, prop> ? prop : never;
}[keyof T];

export type BookRequiredProps = RequiredProps<Book>;
export type BookOptionalProps = OptionalProps<Book>;

export type RemoveProps<T extends object, TProps extends keyof T> = {
    [prop in keyof T as Exclude<prop, TProps>]: T[prop];
};

type BookRequiredPropsType = RemoveProps<Book, BookOptionalProps>;
type BookOptionalPropsType = RemoveProps<Book, BookRequiredProps>;
