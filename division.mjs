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

const getDivision = () => {
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
        reciprocal()
    })
}

// Will flip second fraction then and multiply top and bottom numbers 
const reciprocal = () => {
    solution.num = fractionOne.num * fractionTwo.demo
    solution.demo = fractionOne.demo * fractionTwo.num
    console.log(solution)
    let N = solution.num
    let D = solution.demo
    simple(N,D)
}

const simple = (N,D) => {
    if (D === 0) {
        return answer(N);
    }

    return simple(D, N % D);
};

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

const wholeNum = () => {
    console.log(solution.num, solution.demo)
    let sn = solution.num
    let sd = solution.demo
    if (sn > sd) {
        console.log(`${sn} is bigger then ${sd}`) 
        solution.num = sn - sd
        wholeN = wholeN + 1
        wholeNum()
        }
        else {
        console.log(`the answer is ${wholeN} ${sn}/${sd}`)
        }
}


export default getDivision

// 1/2 3/4 = 4/6 = 2/3
// 2/4 6/8 = 16/24 = 2/3
// 4/6 8/15 = 60/48 = 5/4 = 1 1/4
