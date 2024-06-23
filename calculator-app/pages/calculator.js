import { useState } from "react";

// export deafult tells us that this is the main function
export default function calculator() {
    let [number1, setNumber1] = useState(0);
    let [number2, setNumber2] = useState(0);
    let [operator, setOperator] = useState("");

    let [answer, setAnswer] = useState("");

    function calculate() {
        let result;

        switch (operator) {

            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;

            default:
                return result = NaN;
        }

        setAnswer(result);
    }

    function onInput1Changed(event) {
        setNumber1(parseInt(event.target.value));
    }

    function onInput2Changed(event) {
        setNumber2(parseInt(event.target.value));
    }

    function onInput3Changed(event) {
        setOperator(event.target.value);
    }

    return (
    <div>
        Number 1:
        <input onChange={onInput1Changed}/>
        <br />
        Number 2:
        <input onChange={onInput2Changed}/>
        <br />
        Operator:
        <input onChange={onInput3Changed}/>
        <br />
        <button onClick={calculate}>Calculate</button>
        <br />
        {answer}
    </div>
    );
}