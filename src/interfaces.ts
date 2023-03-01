import {Category} from './enum';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markedDamaged?: DamageLogger;
}

interface DamageLogger {
    (str: string): void;
}

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

interface Magazine {
    title: string;
    publisher: string;
}

interface ShelfItem {
    title: string;
}

interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

interface Callback<T> {
    (err: Error | null, data: T | null): void;
}

export {Book, Author, Pearson, Librarian, DamageLogger as Logger, Magazine, ShelfItem, LibMgrCallback, Callback};
