function User(name,age) {
    this.name = name;
    this.age = age;
}

let user1 = new User('Mike',30);
let user2 = new User('Mike',30);
let user3 = new User('Mike',30);

console.log(user1,user2);