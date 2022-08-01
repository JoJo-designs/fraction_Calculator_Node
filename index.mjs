import inquirer from 'inquirer';
import getNumbers from './muliply.mjs'

const menu = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'Select actions',
            choices: [
                "Muliply",
            ]
        }
    ])
    .then((select) => {
        if(select.selection === "Muliply") {
            console.log('working')
            getNumbers()
        }
    })
}

menu()
export default menu