let numbers = [1, 2, 3, 4, 5, 6];
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

let evenNumbers = numbers.filter(num => num % 2 === 0);
let excellentStudents = students.filter(student => student.grade >= 90);

let reverseNumber = numbers.reverse()

console.log("even number: ", evenNumbers);
console.log("excellent students: ", excellentStudents);
console.log("reverse number: ", reverseNumber);