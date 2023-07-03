function Decorator<C extends object>(lambda: (c: C) => any) {
    return function (target: C, propertyKey: string): void {

    }
}

class TestClass {
    @Decorator((c) => c.test)
    public test: string;
}
