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

export function writeable(isWritable: boolean) {
    return function (target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        descriptor.writable = isWritable;
        return descriptor;
    };
}

export function timeout(ms: number) {
    return function (target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: unknown[]) {
            if (window.confirm('are you sure?')) {
                setTimeout(() => {
                    originalMethod.apply(this, args);
                }, ms);
            }
        };

        return descriptor;
    };
}

export function logParameter(target: object | Function, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;
    const proto = typeof target === 'function' ? target.prototype : target;

    (proto[key] ??= []).push(index);
}

export function logMethod(target: object | Function, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const proto = typeof target === 'function' ? target.prototype : target;
        const indexes = proto[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`);
                }
            });
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer?: (value: any) => T,
    setTransformer?: (value: any) => T
) {
    const values = new Map<any, T>();

    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function format(pref: string = 'Mr./Mrs.') {
    return function (target: object | Function, propName: string) {
        makeProperty(target, propName, value => `${pref} ${value}`, value => value);
    };
}

export function positiveInteger(target: object | Function, propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalSet = descriptor.set;

    descriptor.set = function (value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Invalid value');
        }

        if (originalSet) {
            originalSet.call(this, value);
        }else {
            this[propertyName] = value;
        }
    };
    return descriptor;
}

