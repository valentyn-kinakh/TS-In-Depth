export abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle: string, newYear: number) {
    //     console.log('Crete new reference item');
    //
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;
    #id: number;


    static department: string = 'Research dep...';

    protected constructor(id: number, public title: string, protected year: number) {
        this.#id = id;
        console.log('Crete new reference item');
    }

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}, dep: ${ReferenceItem.department}`);
    }

    getID(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}