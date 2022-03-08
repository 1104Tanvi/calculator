import React, { useState } from 'react'
import './Bmi.css'
import { BsFillBackspaceFill } from "react-icons/bs";
import * as math from 'mathjs'




function Bmical() {
    const [values, change] = useState("")
    const [values2, change2] = useState("")
    const [choose, addingtoit] = useState(["1"])
    const [, addingtoit2] = useState(["1"])
    

    const firstone = () => {
        addingtoit(["1"])
        addingtoit2(["2"])
    };
    const Secondone = () => {
        addingtoit(["2"])
        addingtoit2(["1"])
    };

    const calculate = () => {
        var e = document.getElementById('Weight');
        var weight = e.options[e.selectedIndex].text;
        var ev = document.getElementById('Height');
        var height = ev.options[ev.selectedIndex].text;
        var changedweight = "";
        document.getElementById("boxs").style.display="none";
        document.getElementById("result").style.display="unset";
        switch (height) {
            case "Centimeters":
                changedweight = math.evaluate(values2 + "*" + values2 + "*0.01*0.01")
                break;
            case "Meters":
                changedweight = math.evaluate(values2 + "*" + values2)
                break;
            case "Feet":
                changedweight = math.evaluate(values2 + "*" + values2 + "*0.3048*0.3048")
                break;
            case "Inches":
                changedweight = math.evaluate(values2 + "*" + values2 + "*0.0254*0.0254")
                break;
        }
        if (weight === "Kilograms") {

            changedweight=parseFloat(math.evaluate(`${values}/${changedweight}`)).toFixed(1)
        }
        else if (weight === "Pounds") {
            changedweight=parseFloat(math.evaluate(`(${values}*0.4535)/${changedweight}`)).toFixed(1)
        }

        document.getElementById("no").innerText=`${changedweight}`; 
        if(Number(changedweight)<18.5 && weight !== "Weight")
        {
            document.getElementById("word").innerText="Underweight"
            document.getElementById("word").style.color="rgb(56, 56, 241)"
        }
        else if(Number(changedweight)>18.5 && Number(changedweight)<25.0 && weight !== "Weight")
        {
            document.getElementById("word").innerText="Normal"
            document.getElementById("word").style.color="rgb(6, 209, 50)"
        }
        else if(Number(changedweight)>25.0 && weight !== "Weight")
        {
            document.getElementById("word").innerText="Overweight"
            document.getElementById("word").style.color="rgb(230, 22, 22)"
        }
    };




    const changing = (char) => {
        if (choose[0] === "1") {
            switch (char) {
                case '#':
                    change(values => values.slice(0, -1))
                    break;
                case 'AC':
                    change("")
                    break;
                default:
                    if (values.length < 7)
                        change(prevalue => prevalue + char);

            }
        }
        else {
            switch (char) {
                case '#':
                    change2(values => values.slice(0, -1))
                    break;
                case 'AC':
                    change2("")
                    break;
                default:
                    if (values2.length < 7)
                        change2(prevalue => prevalue + char);

            }
        }
    };
    const again=()=>{
        window.location.reload();
    }


    return (
        <div >
            <div id="result">
               
               <div id="finalanswer">
                   <span id="no" onClick={again} ></span>
                   <span id="word">Choose specific units for  Height and Weight.</span>
                </div>

                <div id="breaker"><hr className="brk"/> </div>

               <div className="head">Information</div>

              
                <div id="about">
                <span className="undertext">Underwieght</span>
                <span className="normaltext">Normal</span>
                <span className="heavytext">Overweight</span>
                </div>
                
                
                <div id="lines">
                <hr id="underweight"/>
                <hr id="normal"/>
                <hr id="overweight"/>
                </div>

                <div id="range">
                <span className="undertext ">16.0</span>
                <span className="normaltext ">18.5</span>
                <span className="normaltext ">25.0</span>
                <span className="heavytext ">40.0</span>
                </div>


            </div>








            <div id='boxs'>
                <div id="options">
                    <div id="first">
                        <select name="Weight" id="Weight" className="buttons select" >
                            <option value="" selected disabled hidden>Weight</option>
                            <option value="Kilograms">Kilograms</option>
                            <option value="Pounds">Pounds</option>
                        </select>
                        <input type="text" className='answers' maxLength="4" value={values} onClick={firstone} readOnly />

                    </div>
                    <div id="second">
                        <select name="Weight" id="Height" className="buttons select">
                            <option value="" selected disabled hidden>Height</option>
                            <option value="Centimeters">Centimeters</option>
                            <option value="Meters">Meters</option>
                            <option value="Feet">Feet</option>
                            <option value="Inches">Inches</option>

                        </select>
                        <input type="text" className='answers' value={values2} onClick={Secondone} readOnly />
                    </div>
                </div>
                <div id='topper'>
                    <button className=' buttons calculators col' onClick={() => changing('AC')}>C</button>
                    <button className=' buttons calculators' onClick={() => changing('#')} ><BsFillBackspaceFill size="30" /></button>
                </div>
                <div id='top'>

                    <button className=' buttons calculators' onClick={() => changing(7)}>7</button>
                    <button className='buttons calculators' onClick={() => changing(8)}>8</button>
                    <button className=' buttons calculators' onClick={() => changing(9)}>9</button>

                </div>

                <div id='middle'>

                    <button className=' buttons calculators nos' onClick={() => changing(4)}>4</button>
                    <button className=' buttons calculators nos' onClick={() => changing(5)}>5</button>
                    <button className='buttons calculators nos' onClick={() => changing(6)}>6</button>

                </div>
                <div id='bottom'>

                    <button className=' buttons calculators nos' onClick={() => changing(1)}>1</button>
                    <button className=' buttons calculators nos' onClick={() => changing(2)}>2</button>
                    <button className=' buttons calculators nos' onClick={() => changing(3)}>3</button>

                </div>
                <div id='bottom'>


                    <button className=' buttons calculators nos' onClick={() => changing(0)} >0</button>
                    <button className=' buttons calculators nos' onClick={() => changing('.')}>.</button>
                    <button className=' buttons calculators nos col' onClick={() => calculate()} >=</button>
                </div>


            </div>
        </div>
    )
}

export default Bmical
