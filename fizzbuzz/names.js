//array methods
// 1. write code to return user array
// 2. write code to return only active users
// 3. sort array by ages
const users = [
    {
        id:1,
        name: "J",
        isActive: true,
        age: 30,
    }
    {
        id:2,
        name: "l",
        isActive: true,
        age: 20,

    }
    {
        id:3,
        name: "g",
        isActive: false,
        age: 12,
    },
];
 
const names = users
.sort((user1, user2) => (user1.age < user2.age ? 1: -1))
.filter((user) => user.isActive)
.map((user) => user.name);
