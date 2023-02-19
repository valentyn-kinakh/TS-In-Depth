import * as Interfaces from '../interfaces';
import {logger, sealed, writeable} from '../decorators';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
    name: string;
    email: string;
    department: string;

    constructor() {
        console.log('Native constructor');
    }

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    @writeable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writeable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }

}
