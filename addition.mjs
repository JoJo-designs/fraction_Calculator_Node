import inquirer from "inquirer";

// New page with cleaner variable names.

// use objects to store data in a cleaner way and set everything to 0
let fractionOne = {
    num: 0,
    demo: 0
}
let fractionTwo = {
    num: 0,
    demo: 0
}

let solution = {
    num: 0,
    demo: 0
}

// collects a users inputs 

const getAddition = () => {
    console.log("page loads")
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'numOne',
            message: 'What is the the top number in the first fraction?',
        },
        {
            type: 'input',
            name: 'demoOne',
            message: 'What is the the bottom number in the first fraction?',
        },
        {
            type: 'input',
            name: 'numTwo',
            message: 'What is the top number in the second fraction',
        },
        {
            type: 'input',
            name: 'demoTwo',
            message: 'What is the the top number in the second fraction?',
        },
    ])
    .then((inputs) => {
        fractionOne.num = parseInt(inputs.numOne);
        fractionOne.demo = parseInt(inputs.demoOne);
        fractionTwo.num = parseInt(inputs.numTwo);
        fractionTwo.demo = parseInt(inputs.demoTwo);
        console.log(fractionOne, fractionTwo);
        checkNumbers()
    })
}

// Will check to see it the bottom numbers are the same.
// if bottom numbers match then starts addition
// if not will need to do more math
const checkNumbers = () => {
    if (fractionOne.demo === fractionTwo.demo ) {
        console.log("the bottom numbers match.");
        addNumbers()
    } else {
        console.log("the bottom numbers do not match."); 
    }
}

// Adds the Numerators together.
const addNumbers = () => {
    solution.num = fractionOne.num + fractionTwo.num
    solution.demo = fractionOne.demo
    console.log(solution)
}

export default getAddition

// 1/3 1/3 = 2/3 