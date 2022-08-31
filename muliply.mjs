import inquirer from 'inquirer';

let topFractionOne 
let bottomFractionOne
let topFractionTwo
let bottomFractionTwo

let num 
let deno

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
    num = N
    deno = D
   console.log(`${N}/${D}`)
   simple(N,D)
}

const simple = (N, D) => {
    if (D === 0) {
        console.log(N, D)
        return solution(N);
    }

    return simple(D, N % D);
};


const solution = (N) => {
    console.log(N, num, deno)
    if ( N === 1 ) {
       console.log(`Fraction cannot be reduced ${num}/${deno}`) 
    } else {
        let sn =  num / N
        let sd =  deno / N
        console.log(`${sn}/${sd}`)
    } 
} 


export default getNumbers