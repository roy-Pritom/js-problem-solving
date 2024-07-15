// 1.Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

// =>

const persons = [
    {
        name: 'Pritom',
        age: 24,
        gender: "Male"
    },
    {
        name: 'Tina',
        age: 20,
        gender: "Female"
    },
    {
        name: 'Rana',
        age: 20,
        gender: "Male"
    },
]

const filterAndMapNames = (persons) => {
    const filteredPeople = persons?.filter(person => person?.gender !== 'Female');
    const names = filteredPeople.map(person => person.name)
    return names
}
console.log(filterAndMapNames(persons));

// 2.Task: Object Manipulation
// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
// =>
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 }
];
const modifyArray = (books) => {
    const titles = books.map(book => book.title);
    return titles;
}
console.log(modifyArray(books));

// 3.Task: Function Composition
// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
// =>
const squareNumber = (x) => {
    return x * x;
}
const doubleNumber = (x) => {
    return x * 2;
}
const add5ToNumber = (x) => {
    return x + 5;
}
const composeFunctions = (x) => {
    return add5ToNumber(doubleNumber(squareNumber(x)));
};

// Example usage:
const number = 3;
console.log(composeFunctions(number));


// 4.Task: Sorting Objects
// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
// =>
const cars = [
    { make: 'Toyota', model: 'Camry', year: 2018 },
    { make: 'Honda', model: 'Civic', year: 2015 },
    { make: 'Ford', model: 'Mustang', year: 2020 },
    { make: 'Tesla', model: 'Model S', year: 2019 }
];
const sortCarsByYear = (cars) => {
    // Use the sort method with a comparison function
    cars.sort((car1, car2) => car1.year - car2.year);
    return cars;
};

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);

// 5.Task: Find And Modify
// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
// =>
    let people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 }
      ];
      
      const findAndModifyAge = (name, newAge) => {
        // Find the person by name
        const person = people.find(person => person.name === name);
        // If person found, modify their age
        if (person) {
          person.age = newAge;
          console.log(`Age updated for ${name}`);
        } else {
          console.log(`${name} not found in the array`);
        }

        console.log(people);
      };

      findAndModifyAge('Bob', 32); 
