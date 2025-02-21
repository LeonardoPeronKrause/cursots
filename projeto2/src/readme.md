**SEÇÃ0 4 - NEXT-GENERATION JAVASCRIPT & TYPESCRIPT**

/*const add = (a:number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5));
*/
const hobbies = ['Sports', 'Cookies'];
const activeHobbies = ['Soccer'];

activeHobbies.push(...hobbies); 

const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person);