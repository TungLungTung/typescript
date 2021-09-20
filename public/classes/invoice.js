// Default is public - readonly - private
export class Invoice {
    // Shorthand
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes vnd${this.amount} for ${this.details}`;
    }
}
