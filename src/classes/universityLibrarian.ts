import * as Interfaces from '../interfaces';

export class UniversityLibrarian implements Interfaces.Librarian {
    constructor(public name, public email, public department) {
    }

    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} is assisting ${custName} with book ${bookTitle}`);
    }
}