const cat = {
    makeSound: function() {
        console.log(this.sound);
    }
}

const mark = Object.create(cat);
mark.sound = "Miau Motherfocker";

mark.makeSound(); // Miau Motherfocker

const batatinha = Object.create(cat);
batatinha.sound = "Meoooooooww";
batatinha.makeSound();

const Dog = function(name, breed) {
    this.name = name;
    this.breed = breed;

    this.makeSound = function() {
        console.log(`${this.name} says AUAU`);
    }
}

const bidu = new Dog('Bidu', 'Vira-Lata');
bidu.makeSound();

const marley = new Dog();
marley.name = 'Marley';
marley.breed = 'Yorkshire';
marley.makeSound();