export class Greeter {
    private environment: string;

    constructor(environment: string) {
        this.environment = environment;
    }

    public greet() {
        console.log(`Hello from ${this.environment}!`);
    }
}