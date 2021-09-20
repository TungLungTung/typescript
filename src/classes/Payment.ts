import {HasFormatter} from '../interfaces/HasFormatter.js'
// Default is public - readonly - private
export class Payment implements HasFormatter {
    // Shorthand
    constructor(
        readonly recipient : string,
        private details : string,
        public amount : number
    ) {}

    format() {
        return `${this.recipient} is owed vnd${this.amount} for ${this.details}`;
    }

}

