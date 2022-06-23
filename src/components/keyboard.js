import ButtonNumber from "./buttonNumber"
import React, { useState } from 'react';
import Operadores from "./operadores"
import ButtonReset from "./buttonReset"
import ButtonRes from "./buttonRes"
import Visor from "./visor"
import NameCalculator from "./nameCalculator"
function Keyboard() {

    const [result, setRes] = useState(0)
    // const [operators, setOper] = useState("")
    // const [val1, setVal1] = useState(0)
    // const [val2, setVal2] = useState(0)
    const [operators, setOperators] = useState([]);
    const [values, setValues] = useState([]);

    function click(number) {

        result ? setRes(result + "" + number) : setRes(number);

        let temp = values;

        if (!temp[operators.length]) {
            temp[operators.length] = number
        } else {
            let value = `${temp[operators.length]}${number}`;
            temp[operators.length] = value
        }

        setValues(temp)

        // if (!operators.length) {
        // if (!result) {
        // setVal1(number)



        // } else {
        // setVal1(val1 + "" + number)

        // console.log(values)


        // }
        // }
        // console.log(val1[0])
        // if (operators.length) {
        //     setRes(result + "" + number)
        //     // setVal2(val2 + "" + number)



        // }
        // if (!result) {
        //     setRes(number);
        //     setVal1(number)
        // }
        // if (result && !operators) {
        //     setRes(result + "" + number);
        //     setVal1(result + "" + number)
        //     console.log("valor 1 =>",val1[1])
        // }
        // if (result && operators) {
        //     setRes(result + "" + number)
        //     setVal2(result + "" + number)
        //     console.log("valor 2 =>",val2)

        //     // console.log(val2)
        // }
    }

    function reset() {
        setRes(0)
        // setOper("")
        // setVal1(0)
        // setVal2(0)
    }

    function operator(number) {
        // setOper(number)
        setRes(result + "" + number)
        //console.log(operators)

        setOperators(operators => [...operators, number])
        // console.log(operators)
    }
    function calculate() {
        var tempValues = values;
        var tempOperators = operators;
        var operation = 0;

        for (var i = 0; i <= tempOperators.length; i++) {
            tempOperators.forEach((element, index) => {
                if (element == "*") {
                    operation = parseInt(tempValues[index]) * parseInt(tempValues[index + 1])
                }
                if (element == "/") {
                    operation = parseInt(tempValues[index]) / parseInt(tempValues[index + 1])
                }

                tempValues.splice(index, 2, operation);
                tempOperators.splice(index, 1);
                console.log(tempValues);
                // setValues(tempValues);
                //setOperators(tempOperators);

            });
        }
        setRes(tempValues)



        // var operatorMultiplication = [];
        // tempOperators.forEach((element, index) => {
        //     if (element === "*") operatorMultiplication.push(index);
        // });

        // operatorMultiplication.forEach(element => {
        //     var operation = 0;
        //     if (element == 0) {
        //         operation = parseInt(tempValues[element]) * parseInt(tempValues[element + 1])
        //         tempValues.splice(element, 2, operation);
        //     } else {
        //         operation = parseInt(tempValues[element - 1]) * parseInt(tempValues[element])
        //         tempValues.splice(element - 1, 2, operation);
        //     }
        //     tempOperators.splice(element, 1);

        //     console.log(tempValues);
        // })



        // console.log(tempValues);

        // console.log(values)
        // console.log(operators)
        // console.log("valor 1 =>", val2)
        // console.log("valor 2 =>", val2)
        // console.log("Soma = ", val1 + val2)
        // setOper("")
        // switch (operators) {
        //     case "+":
        //         setRes(val1 + val2)
        //         break;
        //     case "-":
        //         setRes(val1 - val2)
        //         break;
        //     case "*":
        //         setRes(val1 * val2)
        //         break;
        //     case "/":
        //         setRes(val1 / val2)
        //         break;
        //     default:
        //         setRes()
        //         break;
        // }
    }

    return (
        <div className="box">
            <NameCalculator/>
            <Visor number={result} />
            <div className="box-number">
                <ButtonReset number={"C"} clickNumber={reset} />
                <Operadores number={"%"} clickNumber={operator} />
                <Operadores number={"÷"} clickNumber={operator} />
                <Operadores number={"x"} clickNumber={operator} />
                <ButtonNumber number={7} clickNumber={click} />
                <ButtonNumber number={8} clickNumber={click} />
                <ButtonNumber number={9} clickNumber={click} />
                <Operadores number={"-"} clickNumber={operator} />
                <ButtonNumber number={4} clickNumber={click} />
                <ButtonNumber number={5} clickNumber={click} />
                <ButtonNumber number={6} clickNumber={click} />
                <Operadores number={"+"} clickNumber={operator} />
                <ButtonNumber number={1} clickNumber={click} />
                <ButtonNumber number={2} clickNumber={click} />
                <ButtonNumber number={3} clickNumber={click} />
                <Operadores number={"."} clickNumber={click} />
                <ButtonNumber number={0} clickNumber={click} />
                <ButtonRes number={"="} clickNumber={calculate} />
                <Operadores number={""} clickNumber={click} />
            </div>
        </div>
    )
}

export default Keyboard;