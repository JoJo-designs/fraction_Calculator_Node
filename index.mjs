import inquirer from 'inquirer';
import getNumbers from './multiply.mjs'
import getAddition from './addition.mjs'

const menu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Select actions',
            choices: [
                "Multiply",
                "Addition"
            ]
        }
    ])
    .then((select) => {
        if(select.selection === "Multiply") {
            console.log('working')
            getNumbers()
        } else {
            console.log('working')
            getAddition()
        }
    })
}

menu()
export default menu