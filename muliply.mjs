import inquirer from 'inquirer';

let topFractionOne 
let bottomFractionOne
let topFractionTwo
let bottomFractionTwo

let num 
let deno

// collects data from user
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

// Take user input and multiply the numbers
const multiplying = () => {
   let N = topFractionOne * topFractionTwo;
   let D = bottomFractionOne * bottomFractionTwo; 
    num = N
    deno = D
   console.log(`${N}/${D}`)
   simple(N,D)
}

// function that can find the lowest common denominator
const simple = (N, D) => {
    if (D === 0) {
        console.log(N, D)
        return solution(N);
    }

    return simple(D, N % D);
};
// 4253

// Use the lowest common denominator to simplify the fraction
const solution = (N) => {
    let sn
    let sd 
    console.log(N, num, deno)
    if ( N === 1 ) {
       console.log(`Fraction cannot be reduced ${num}/${deno}`) 
       sn = num
       sd = deno
    } else {
        sn =  num / N
        sd =  deno / N
        console.log(`${sn}/${sd}`)
    } 
    wholeNum(sn, sd)
} 

// If the numerator is larger then denominator means there is a whole number at the start of a fraction
const wholeNum = (sn, sd) => {
    if (sn > sd) {
        console.log(`${sn} is bigger then ${sd}`)
        let wholeN = sd%sn
        let value = sd*sd
        let remainder = sn-value
        console.log(wholeN, remainder)
        console.log(`${wholeN} ${remainder}/${sd}`)

    } else {
        console.log(`${sn}/${sd}`)
    }
}


export default getNumbers