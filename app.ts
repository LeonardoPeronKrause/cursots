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