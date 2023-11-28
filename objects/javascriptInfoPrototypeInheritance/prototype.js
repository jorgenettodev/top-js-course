let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    },
};

let admin = {
    __proto__: user,
    isAdmin: true,
};
alert(admin.fullName); // John Smith

// setter 
admin.fullName = "Alice Cooper";

alert(admin.fullName);
alert(user.fullName);