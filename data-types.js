const age = 20;
console.log('age=', age, typeof age);
const name = 'Alex';
console.log('name', name, typeof name);
const man = true;
console.log('man', man, typeof man);
const ownCar = null;
console.log('ownCar', ownCar, typeof ownCar);
const marriage = undefined;
console.log('marriage', marriage, typeof marriage);
const alexey = {
    age,
    name
};
console.log('Alexey', alexey, typeof alexey);
const course = Symbol('id');
console.log('Symbol course', course, typeof course);
const intBigNumber = 300n;
console.log('intBigNumber', intBigNumber, typeof intBigNumber);