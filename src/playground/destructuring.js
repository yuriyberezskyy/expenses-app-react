import React from 'react';

//Object Distructuring
// const person = {
//   age: 26,
//   location: {
//     city: 'Phily',
//     temp: 92
//   }
// };

// const { name = 'Lolo', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }

//Array Distructuring
const address = ['1234 Big Street', 'Philly', 'Pensylvania', '12345'];

const [street, city, state, zip] = address;

//const [, city, state, ] = address; --> pick up city and state

console.log(`You are in ${city} ${state}`);

function Destructuring() {
  return <div></div>;
}

export default Destructuring;
