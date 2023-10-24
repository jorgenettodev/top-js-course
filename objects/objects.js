// Object literal

const myObject = {
    property: 'Value!',
    otherProperty: 77,
    "obnoxious property": function() {
        // do stuff!
    }
}

const person = {
    name: "John",
    age: 30,
    isStudent: true,
    "string property": "This is indeed a string property!",
    greet: function() {
        return `Hi, my name is ${this.name}.`;
    },

}

// getting information out of an object

// dot notation
myObject.property // 'Value!'
myObject["obnoxious property"] // [Function]

// Object constructors

function Person(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;

    this.greet =  function() {
        return `Hi my name is ${this.name}`;
    }
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        return `My name is ${this.name}.`;
    };
}

const player1 = new Player("Netto", "X");

// Exercise - Write a constructor for making "Book" objects. It should have the book's title, author, the number of pages, and whether or not it was read yet.

function Book(title, author, numPages, isRead) {
    this.title = title;
    this.author = author;
    this.numPages = numPages,
    this.isRead = isRead;

    this.info = function() {
        return `${this.title} by ${this.author}, ${numPages} pages, ${this.isRead}`;
    }
}

const theHobbit = new Book("The Hobbit", "J. R. R. Tolkien", 295, "not read yet");

console.log(theHobbit.info());