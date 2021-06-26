// 
const username = 'Kenn';
console.log(`${username} is the true JS Wizard!`);

// template literals-which breaks things into more than one line
console.log(`Hey students,
What bugs can
${username}
fix
for you today?`);

// interpolation
const person = {
    username: 'Kenn',
    profession: 'Secret Agent'
};

console.log(`${person.username}, ${person.profession}, extraordinaire`);