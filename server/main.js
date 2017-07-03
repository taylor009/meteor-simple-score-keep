import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {

});

// // Object Spread Operator
// let user ={
//     name: 'Taylor',
//     location: 'Fort Lauderdale'
// };
//
// let person = {
//     ...user,
//     age: 20
// };
//
// console.log(person);
//
// // Object Property Shorthand
// let bike = 'Scott';
// let stuff = {
//     bike,
//     labtop: 'Dell'
// };
//
// // console.log(stuff)
//
// let house = {
//     bedrooms: 4,
//     bathrooms: 3.5
// };
//
// let yearBuilt = 1996;
//
// console.log({
//     ...house,
//     bedrooms: 2,
//     yearBuilt,
//     flooring: 'Carpet'
// });