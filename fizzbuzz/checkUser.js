const users = [
    {
        id:1,
        name: "J",
        isActive: true,
        age: 30,
    },
    {
        id:2,
        name: "l",
        isActive: true,
        age: 20,

    },
    {
        id:3,
        name: "g",
        isActive: false,
        age: 12,
    },
];

const isNameExists = (name, arr) => arr.some((el) => el.name === name) // arr.some searches for el name and returns name element as boolean