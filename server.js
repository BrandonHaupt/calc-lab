require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (request, response) => {
    response.send('Listening')
})

app.get(`/calcquery/:num1/:num2`, (request, response) => {
    const num1 = parseInt(request.params.num1)
    const num2 = parseInt(request.params.num2)

    // for this you put ?operation=mult at the end of calcquery/7/1?operation=mult
    const operation = request.query.operation

    switch (operation) {
        case "add":
            response.send(`<h1>${num1} + ${num2} = ${num1 + num2}</h1>`)
            break;

        case "sub":
        case "subtract":
            response.send(`<h1>${num1} + ${num2} = ${num1 + num2}</h1>`)
            break;

        case "multiply":
        case "mult":
            response.send(`<h1>${num1} * ${num2} = ${num1 * num2}</h1>`)
            break;

        case "divide":
        case "div":
            response.send(`<h1>${num1} / ${num2} = ${num1 / num2}</h1>`)
            break;
        
        case "exponent":
            response.send(`<h1>${num1} ^ ${num2} = ${num1 ** num2}</h1>`)
            break;

        default:
            response.send(`<h1>Please choose the following</h1>
                <ul>
                    <li>add</li>
                    <li>sub/subtract</li>
                    <li>multiply/mult</li>
                    <li>divide/div</li>
                    <li>exponent</li>
                </ul>
            `)
            break;
    }

})


app.listen(PORT, ()=> {
    console.log(`Listening on port: ${PORT}`)
})