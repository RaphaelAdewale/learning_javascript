function calculator(number1, number2, operator) {
    if (operator == '*'){
        return(number1 * number2);
    }
    
    if (operator == '+'){
        return(number1 + number2);
    }
    
    if (operator == '/'){
        return(number1 / number2);
    }
    
    if (operator == '-'){
        return(number1 - number2);
    }    
}

console.log((calculator(10, 5, '-')) + calculator(3, 2, '*'));