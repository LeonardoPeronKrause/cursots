const person = {
    name: 'Leonardo',
    age: 22,
    hobbies: ['Sports', 'Cooking', 'Soccer'],
    role: [2, 'author']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}