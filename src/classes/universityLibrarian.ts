import * as Interfaces from '../interfaces';
import {format, logger, logMethod, logParameter, sealed, writeable} from '../decorators';

// @sealed('UniversityLibrarian')
@logger
export class UniversityLibrarian implements Interfaces.Librarian {
    @format() name: string;
    email: string;
    department: string;

    constructor() {
        console.log('Native constructor');
    }

    @logMethod
    assistCustomer(@logParameter custName: string,@logParameter bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }

    // @writeable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    // @writeable(false)
    teachCommunity(): void {
        console.log('Teaching community');
    }

}
