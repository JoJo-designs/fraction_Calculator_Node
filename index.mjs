import inquirer from 'inquirer';
import getNumbers from './multiply.mjs'

const menu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Select actions',
            choices: [
                "Multiply",
            ]
        }
    ])
    .then((select) => {
        if(select.selection === "Multiply") {
            console.log('working')
            getNumbers()
        }
    })
}

menu()
export default menu