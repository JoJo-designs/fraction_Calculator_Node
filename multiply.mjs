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

const getNumbers = () => {
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
        Multiply()
    })
}

// Multiply numbers is the first step
const Multiply = () => {
    let N = fractionOne.num * fractionTwo.num;
    let D = fractionOne.demo * fractionTwo.demo;
    solution.num = N;
    solution.demo = D;
    console.log(`${N}/${D}`)
    simple(N,D)
}

// Finds lowest common denominator
const simple = (N,D) => {
    if (D === 0) {
        return answer(N);
    }

    return simple(D, N % D);
};

//Use lowers common denominator to simplify the fraction
// const answer = (N) => 
// {console.log(N)
//     let sn
//     let sd
//     if (N === 1) {
//         console.log(`Fraction cannot be reduced ${solution.num}/${solution.demo}`) 
//         sn = solution.num
//         sd = solution.demo
//     } else {
//         sn =  solution.num / N
//         sd =  solution.demo / N
//         console.log(`${sn}/${sd}`)
//     }
//     wholeNum(sn, sd)
// }

const answer = (N) => 
{console.log(N)
    if (N === 1) {
        console.log(`Fraction cannot be reduced ${solution.num}/${solution.demo}`) 
    } else {
        solution.num =  solution.num / N
        solution.demo =  solution.demo / N
    }
    wholeNum()
}

// if Numerator is bigger then the denominator simplify to a whole number
const wholeNum = () => {
    console.log(solution.num, solution.demo)
    let sn = solution.num
    let sd = solution.demo
    if (sn > sd) {
        console.log(`${sn} is bigger then ${sd}`) 
        solution.num = sn - sd
        wholeN = wholeN + 1
        console.log(`the answer is ${wholeN} ${sn}/${sd}`)
        }
        else {
        console.log(`the answer is ${sn}/${sd}`)
        }
}

// // get the decimal equivalent of the fractions if it is not a whole number.
// const decimal = (sn, sd) => {
//     console.log(`this is the fraction ${sn}/${sd}`)
//     const newValue = sn / sd 
//     console.log(newValue)
// }



export default getNumbers

// 1/2 3/4 = 3/8 not reduced = 0.375
// 4/2 5/3 = 10/3 reduced to 3 1/3 = will not be turned into a decimal
// 2/4 6/8 = 12/32 reduced to 3/8 to fraction = 0.375