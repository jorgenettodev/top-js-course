function testArrowFunction() {
    function Pet(type, legs) {
        this.type = type;
        this.legs = legs;
    
        this.logInfo = () => {
            console.log(`I am a ${this.type} and I have ${this.legs} legs.`)
        }
    }
    
    const cat = new Pet("Dog", 3);
    cat.logInfo();
}

// create a Exercise function constructor with name and mastered (boolean);
function testExercise() {
    function Exercise(name, learned) {
        this.name = name;
        this.learned = learned;
    
        this.learn = () => {
            if (!this.learned) {
                console.log(`Now I can do ${this.name} skill!`);
                this.learned = true;
            }
        }
    }
    const pullup = new Exercise('Pull-up', false);

    pullup.learn();
}
class Skill {
    constructor(name, learned, reps) {
        this.name = name;
        this.learned = learned;
        this.reps = reps;
    }

    learn() {
        this.learned = true;
        console.log(`I can do at least one rep of ${this.name}`);
    }
}

// Constructor invocation
const hspu = new Skill('HSPU', false);

hspu.learn(); 
console.log(hspu.name); // write the output

function foo() {
    this.property = 'Default Value';
}

const fooInstance = new foo();
console.log(fooInstance.property); // Default value;

class Bar {
    constructor() {
        this.property = 'Default Value';
    };
}

const barInstance = new Bar();
console.log(barInstance.property);

function Vehicle(type, wheelsCount) {
    this.type = type;
    this.wheelsCount = wheelsCount;
    return this;
}

// Function invocation
const car = Vehicle('Car', 4);


console.log('testing code runner');
