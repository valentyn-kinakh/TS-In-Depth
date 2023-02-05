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

export {Book, Author, Pearson, Librarian, DamageLogger as Logger, Magazine, ShelfItem};