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

let wholeN = 0

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
        normalize()
    }
}

// if denominators don't match multiply top and bottom of each fraction by 
// others denominator.
const normalize = () => {
    console.log("normalizing start")
    const demoOne = fractionOne.demo
    const demoTwo = fractionTwo.demo
    fractionOne.num = demoTwo * fractionOne.num
    fractionOne.demo = demoTwo * fractionOne.demo
    fractionTwo.num = demoOne * fractionTwo.num
    fractionTwo.demo = demoOne * fractionTwo.demo
    console.log(fractionOne, fractionTwo)
    addNumbers()
}


// Adds the Numerators together.
const addNumbers = () => {
    let N = fractionOne.num + fractionTwo.num
    let D = fractionOne.demo
    solution.num = N;
    solution.demo = D;
    console.log(`${N}/${D}`)
    simple(N,D)
}

// get the lowest common denominator
const simple = (N,D) => {
    if (D === 0) {
        return answer(N);
    }

    return simple(D, N % D);
};

// takes lowest common denominators and sets them as a solution
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


// should find whole number of the fraction with numerators that are bigger then denominators
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

export default getAddition

// 1/3 1/3 = 2/3 
// 1/2 3/4 = 4/8 6/8 = 10/8