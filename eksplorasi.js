let numbers = [3, 2, 1, 6, 5, 1];
console.log("numbers: ", numbers);

let fruits = ['apple', 'banana', 'orange'];
console.log("fruits: ", fruits);

let students = [{
    name: 'Alice',
    grade: 90
},
{
    name: 'Bob',
    grade: 85
},
];

numbers.push(7, 8);
console.log("push numbers: ", numbers);
let lastNumber = numbers.pop();
console.log("pop numbers: ", numbers);

fruits.shift();
console.log("shift fruits: ", fruits);

fruits.unshift('grape', 'kiwi');
console.log("unsfhit fruits: ", fruits);

numbers.splice(2, 3);
console.log("spliced numbers: ", numbers);

let slicedFruits = fruits.slice(1, 3);

console.log("sliced fruits: ", slicedFruits);


let evenNumbers = numbers.filter(num => num % 2 === 0);
let excellentStudents = students.filter(student => student.grade >= 90);

let reversedNumber = numbers.reverse()
let sortedNumber = numbers.reverse()

console.log("even number: ", evenNumbers);
console.log("excellent students: ", excellentStudents);
console.log("reverse number: ", reversedNumber);


let student = {
    firstName: 'John',
    lastName: 'John',
}

let { firstName: studentName } = student
console.log("destructuring object: ", studentName)

let person = {
    name: "Anisa",
    age: 20,
    increment: function () {
        this.age += 1
    }
}

person.increment()
console.log(person.age)