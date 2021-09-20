import {HasFormatter} from '../interfaces/HasFormatter.js'
// Default is public - readonly - private
export class Invoice implements HasFormatter {
    // Shorthand
    constructor(
        readonly client : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.client} owes vnd${this.amount} for ${this.details}`;
    }

}

