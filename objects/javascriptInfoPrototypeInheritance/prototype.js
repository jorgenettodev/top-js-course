
function testThis() {
    let animal = {
        walk() {
            if (!this.isSleeping) {
                alert(`I walk`);
            }
        },
        sleep() {
            this.isSleeping = true;
        },
    };
    
    let rabbit = {
        name: "White Rabbit",
        __proto__: animal,
    };
    
    rabbit.sleep();
    
    alert(rabbit.isSleeping); // true
    alert(animal.isSleeping); // undefined (because isSleeping was not yet defined);
    animal.isSleeping = false;
    alert(animal.isSleeping); // false
}

// FOR..IN LOOP
let animal = {
    eats: true,
    isAnAnimal: true,
};


let rabbit = {
    jumps: true,
    likesCarrots: true,
    __proto__: animal,
};

alert(Object.keys(rabbit)); // jumps, likesCarrots

for (let property in rabbit) {
    let isOwn = rabbit.hasOwnProperty(property);
    if (isOwn) {
        alert(`Nossa propriedade (meme do pernalonga): ${property}`);
    } else {
        alert(`Propriedade herdada de Animal: ${property}`);
    }
}