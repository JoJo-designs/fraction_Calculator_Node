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
   let N = topFractionOne * topFractionTwo;
   let D = bottomFractionOne * bottomFractionTwo; 
   console.log(`${N}/${D}`)
   simple(N, D)
}

const simple = (N, D) => {
    if (D === 0) {
        return N;
    }

    console.log(N, D)
    return simple(D, N % D);
};



//Long Functions need to be simplified
// const simple = (newNumerators, newDenominators) => {
//     console.log( newNumerators, '/', newDenominators )
//     let evenNumerator = newNumerators % 2
//     let evenDenominator = newDenominators % 2 
//     console.log(evenNumerator, evenDenominator)
//     if (evenNumerator === 0 && evenDenominator === 0) {
//         let simpleNum = newNumerators / 2
//         let simpleDem = newDenominators / 2
//         console.log(simpleNum, simpleDem)
//         let evenNum = simpleNum % 2
//         let evenDem = simpleDem % 2
//         if (evenNum === 0 && evenDem === 0 ) {
//             let smallNum = simpleNum / 2
//             let smallDem = simpleDem / 2
//             console.log(smallNum, smallDem)
//         }
//     }
// }

// const simple = (newNumerators, newDenominators) => {
//     let num = newNumerators
//     let dem = newDenominators
//     let evenNum = num % 2
//         let evenDem = dem % 2
//     console.log( num, '/', dem )
//     do {
//             if ( evenNum === 0 && evenDem === 0 ) {
//                 num = num / 2
//                 dem = dem / 2
//                 console.log(num, dem)
//             }
//     }
//     while (evenNum === 0 && evenDem === 0)
//     console.log(num, dem)
// }



export default getNumbers