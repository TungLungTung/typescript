import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('FPT','Internet ADSL',1200000);
// docTwo = new Payment('Gooogle','Google Adwords Salary',5200000);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('FPT','Internet bill',365000);
// const invTwo = new Invoice('EVN','Electronic bill',2000000);
// console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// // invOne.client = 'Viettel';
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// }) 
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list templates instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Khai bao kieu nay la     co the khai bao ...values o duoi
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Generics
// Neu de <T> khong thi no bat duoc properties cua object, nhung khi add string vao van dc
// Vay can phai <T extends object> de no hieu la phai object
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let documentOne = addUID({ name: 'TungLe', age: 40 });
// let documentTwo = addUID('string'); // Loi~ neu nhu extends
console.log(documentOne.age);
const documentThree = {
    uid: 1,
    resourceName: 'Tung',
    data: { name: 'shaun' },
};
const documentFour = {
    uid: 1,
    resourceName: 'Tung',
    data: ['Tung Le', 'Milk'],
};
// ENUMS
// Generics thi ok, nhung nhieu khi muon bao tri khong biet kieu du lieu no la nhu the nao, confuse de thay
console.log(documentThree, documentFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const memberOne = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: { title: 'John Deep' }
};
const memberTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'Avatar' }
};
console.log(memberOne, memberTwo);
// ResourceType => ID cu~a Resource Type
// TUPLES
let arr = ['ryu', 25, true];
arr[0] = true; // Duoc vi no khong co biet thu tu o trong array
arr = [true, 30, false]; // Van duoc
// Tuple lam dieu do
let tup = ['ryu', 25, true];
// tup[0] = false; // Khong the do da khai bao tup
let student;
student = ['Tung Le', 100];
// student1 = [123123,'Tung']; // Khong duoc
