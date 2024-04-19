import { compose } from "redux";

function removeSpaces(string) {
    return string.split(" ").join("");
}

// console.log(removeSpaces("abc def ghi"))


function repeatString(string) {
    // return string.repeat(2);
    return string + string; // can also use 
}

function convertToUpper(string) {
    return string.toUpperCase();
}

const input = "abc def ghi"

// const output = convertToUpper(repeatString(removeSpaces(input)));

// console.log(output)

const composedFunction = compose(removeSpaces, repeatString, convertToUpper);
console.log( composedFunction(input))