import inquirer from 'inquirer';


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
            console.log(`selection was ${select.selection}`)
        }
    })
}

menu()