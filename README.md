**CURSO DE TYPESCRIPT**

**Aula 15.**
  Working with Numbers, Strings & Booleans

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
   /*if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    throw new Error('Incorrect input!');
   }*/
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
  
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);

**Aula 17.**
  Object Types

const person = {
    name: 'Leonardo',
    age: 22
};

console.log(person.name);

**Aula 19**
  Array Types

const person = {
    name: 'Leonardo',
    age: 22,
    hobbies: ['Sports', 'Cooking', 'Soccer']
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

**AULA 23**
  Union Types

function combine(input1: string | number, input2: string | number) {
   let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2;
   } else {
    result = input1.toString() + input2.toString();
   }
   return result;
 }

 const combinedAges = combine(30, 26);
 console.log(combinedAges);

 const combinedNames = combine('Max', 'Anna');
 console.log(combinedNames);

**Aula 24**
  Literal Types

function combine(
    input1: string | number,
    input2: string | number,
    resultConversing: 'as-number' | 'as-text'
) {
   let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversing === 'as-number') {
        result = +input1 + +input2;
   } else {
        result = input1.toString() + input2.toString();
   }
   return result;
   /*if (resultConversing === 'as-number') {
    return +result;
   } else {
    return result.toString();
   }*/
 }

 const combinedAges = combine('30', '26', 'as-number');
 console.log(combinedAges);

 const combinedStringAges = combine('30', '26', 'as-number');
 console.log(combinedStringAges);

 const combinedNames = combine('Max', 'Anna', 'as-text');
 console.log(combinedNames);

 **Aula 25**
  Type Aliases/ Custom Types

  type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text'; 

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversing: ConversionDescriptor
) {
   let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversing === 'as-number') {
        result = +input1 + +input2;
   } else {
        result = input1.toString() + input2.toString();
   }
   return result;
   /*if (resultConversing === 'as-number') {
    return +result;
   } else {
    return result.toString();
   }*/
 }

 const combinedAges = combine('30', '26', 'as-number');
 console.log(combinedAges);

 const combinedStringAges = combine('30', '26', 'as-number');
 console.log(combinedStringAges);

 const combinedNames = combine('Max', 'Anna', 'as-text');
 console.log(combinedNames);

**AULA 27**
  Function Return Types & 'void'

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

**AULA 28**
  Functions as Types

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

**AULA 29**
  Function Types & Callbacks

function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
} 

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});

**AULA 30**
  The "unknown" Type

let userInput: unknown;
let userName: string;

userInput= 5;
userInput = 'MAx';
if (typeof userInput === 'string') {
    userName = userInput;
}

**AULA 31**
  The "never" Type

let userInput: unknown;
let userName: string;

userInput= 5;
userInput = 'MAx';
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number) {
    throw { message: message, errorCode: code }
    // while (true) {}
}

generateError('An error occured!', 500);

