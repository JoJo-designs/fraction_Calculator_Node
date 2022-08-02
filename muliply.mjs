import inquirer from 'inquirer';

let topFractionOne 
let bottomFractionOne
let topFractionTwo
let bottomFractionTwo

const getNumbers = () => {
    console.log("page loads")
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'fractionOneTop',
            message: 'What is the the top number in the first fraction?',
        },
        {
            type: 'input',
            name: 'fractionOneBottom',
            message: 'What is the the bottom number in the first fraction?',
        },
        {
            type: 'input',
            name: 'fractionTwoTop',
            message: 'What is the top number in the second fraction',
        },
        {
            type: 'input',
            name: 'fractionTwoBottom',
            message: 'What is the the top number in the second fraction?',
        },
    ])
    .then((inputs) => {
        topFractionOne = inputs.fractionOneTop
        bottomFractionOne = inputs.fractionOneBottom
        topFractionTwo = inputs.fractionTwoTop
        bottomFractionTwo = inputs.fractionTwoBottom
        console.log(`${topFractionOne}/${bottomFractionOne} ${topFractionTwo}/${bottomFractionTwo}`)
    })
}


export default getNumbers