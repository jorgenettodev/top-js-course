// create an object called name and give it one property
let animal = {
    eats: true,
    talks: false,
};

let rabbit = {
    jumps: true,
};

rabbit.__proto__ = animal; // (*)