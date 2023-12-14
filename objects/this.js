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

