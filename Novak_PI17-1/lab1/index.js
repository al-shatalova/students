var number1Str = prompt('Please, input the first number', 0)
var number2Str = prompt('Please, input the second number', 0)
var number1 = parseInt(number1Str, 10)
var number2 =  parseInt(number2Str, 10)
var operator = prompt('Input your operation symbol or name')
switch (operator.toLowerCase()) {
    case 'addition', '+', 'add':
        alert(`The result is: ${number1 + number2}`)
        break;
    case 'subtraction', '-', 'minus':
        alert(`The result is: ${number1 - number2}`)
        break;
    case 'multiplication', '*':
        alert(`The result is: ${number1 * number2}`)
        break;
    case 'division', '/':
        alert(`The result is: ${number1 / number2}`)
        break;
    default:
        alert(`Results of all operations\n
            Addition: ${number1 + number2}\n
            Subtraction: ${number1 - number2}\n
            Multiplication: ${number1 * number2}\n
            Division: ${number1 / number2}
        `)
        break;
}
