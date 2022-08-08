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
        topFractionOne = parseInt(inputs.fractionOneTop)
        bottomFractionOne = parseInt(inputs.fractionOneBottom)
        topFractionTwo = parseInt(inputs.fractionTwoTop)
        bottomFractionTwo = parseInt(inputs.fractionTwoBottom)
        console.log(`${topFractionOne}/${bottomFractionOne} ${topFractionTwo}/${bottomFractionTwo}`)
        multiplying()
    })
}

const multiplying = () => {
   let newNumerators = topFractionOne * topFractionTwo;
   let newDenominators = bottomFractionOne * bottomFractionTwo; 
   simple(newNumerators, newDenominators)
}


const simple = (newNumerators, newDenominators) => {
    console.log( newNumerators, '/', newDenominators )
    let evenNumerator = newNumerators % 2
    let evenDenominator = newDenominators % 2 
    console.log(evenNumerator, evenDenominator)
    if (evenNumerator === 0 && evenDenominator === 0) {
        console.log("Both numbers a even.")
    }
}

export default getNumbers