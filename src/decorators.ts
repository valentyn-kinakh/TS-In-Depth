export function sealed(name: string) {
    console.log('Function sealed');

    return function (constructor: Function): void {
        console.log(`Sealing constructor ${name}`);

        Object.freeze(constructor);
        Object.freeze(constructor.prototype);
    };
}


export function logger<TFunc extends Function>(constructor: TFunc): TFunc {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(constructor.name);

        this.age = 30;
    };

    newConstructor.prototype = Object.create(constructor.prototype);

    newConstructor.prototype.printLibrarian = function (): void {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    };

    return newConstructor as TFunc;
}
