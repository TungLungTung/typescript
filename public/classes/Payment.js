// Default is public - readonly - private
export class Payment {
    // Shorthand
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed vnd${this.amount} for ${this.details}`;
    }
}
