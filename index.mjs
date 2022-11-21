import inquirer from 'inquirer';
import getNumbers from './multiply.mjs'
import getAddition from './addition.mjs'
import getDivision from './division.mjs';

const menu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Select actions',
            choices: [
                "Multiply",
                "Addition",
                "Division"
            ]
        }
    ])
    .then((select) => {
        if(select.selection === "Multiply") {
            console.log('working')
            getNumbers()
        } else if (select.selection === "Addition") {
            console.log('working')
            getAddition()
        } else {
            console.log('working')
            getDivision()
        }
    })
}

menu()
export default menu