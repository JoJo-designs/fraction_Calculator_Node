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
    })
}

export default getAddition