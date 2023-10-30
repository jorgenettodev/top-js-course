function Person(name, age, isStudent) {
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;

    this.greet =  function() {
        return `Hi my name is ${this.name}`;
    }
}

function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    console.log(`My marker is ${this.marker}`)
}

// Make 'Player' objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");





function testExercise() {
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
}
