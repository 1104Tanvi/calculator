import React, { useState } from 'react'

import { BsFillBackspaceFill } from "react-icons/bs";

import * as math from 'mathjs'


function Distance() {
    const [values, change] = useState("")
    const [distancevalue, changeddistance] = useState("")

    const calculate = () => {
        var e = document.getElementById("length");
        var lengthone = e.options[e.selectedIndex].text;
        var ev = document.getElementById("length1");
        var lengthtwo = ev.options[ev.selectedIndex].text;
        var changed = ""
        switch (lengthone) {
            case "Kilometers":
                changed = values
                break;
            case "Meters":
                changed = math.evaluate(values+"*0.001")
                break;
            case "Decimeters":
                changed = math.evaluate(values+"*0.0001")
                break;
            case "Centimeters":
                changed = math.evaluate(values+"*0.00001")
                break;
            case "Millimeters":
                changed = math.evaluate(values+"*0.000001")
                break;
            case "Micrometers":
                changed = math.evaluate(values+"*0.000000001")
                break;
            case "Nanometers":
                changed = math.evaluate(values+"*0.000000000001")
                break;
            case "Picometers":
                changed = math.evaluate(values+"*0.000000000000001")
                break;
            case "Nautical miles":
                changed = math.evaluate(values+"*1.852")
                break;
            case "Miles":
                changed = math.evaluate(values+"*1.6093")
                break;
            case "Yards":
                changed = math.evaluate(values+"*0.0009144")
                break;
            case "Foots":
                changed = math.evaluate(values+"*0.0003048")
                break;
                case "Units..":
                    lengthtwo="Units.."
                    break;
        }
        

        switch (lengthtwo) {
            case "Kilometers":
                 changeddistance(parseFloat(changed+"").toFixed(15))
                break;
            case "Meters":
                changeddistance(parseFloat(math.evaluate(changed+"/0.001")).toFixed(12))
                break;
            case "Decimeters":
                changeddistance(parseFloat(math.evaluate(changed+"/0.0001")).toFixed(11))
                break;
            case "Centimeters":
                changeddistance(parseFloat(math.evaluate(changed+"/0.00001")).toFixed(10))
                break;
            case "Millimeters":
                changeddistance(parseFloat(math.evaluate(changed+"/0.000001")).toFixed(9))
                break;
            case "Micrometers":
                changeddistance(parseFloat(math.evaluate(changed+"/0.000000001")).toFixed(6))
                break;
            case "Nanometers":
                changeddistance(parseFloat(math.evaluate(changed+"/0.000000000001")).toFixed(3))
                break;
            case "Picometers":
                changeddistance(parseFloat(math.evaluate(changed+"/0.000000000000001")).toFixed(1))
                break;
            case "Nautical miles":
                changeddistance(parseFloat(math.evaluate(changed+"/1.852")).toFixed(18))
                break;
            case "Miles":
                changeddistance(parseFloat(math.evaluate(changed+"/1.6093")).toFixed(18))
                break;
            case "Yards":
                changeddistance(parseFloat(math.evaluate(changed+"/0.0009144")).toFixed(15))
                break;
            case "Foots":
                changeddistance(parseFloat(math.evaluate(changed+"/0.0003048")).toFixed(15))
                break;
            case "Units..":
                changeddistance("Choose a unit")
                break;
        }

    };




    const changing = (char) => {

        switch (char) {
            case '#':
                change(values => values.slice(0, -1))
                break;
            case 'AC':
                change("")
                break;
            default:
                if (values.length < 15)
                    change(prevalue => prevalue + char);

        }


    };
    return (
        <div>
            <div >
                <div id='boxs'>
                    <div id="options">
                        <div id="first">
                            <select name="length" id="length" className="buttons select">
                                <option value="" selected disabled hidden>Units..</option>
                                <option value="Kilometers">Kilometers</option>
                                <option value="Meters">Meters</option>
                                <option value="Decimeters">Decimeters</option>
                                <option value="Centimeters">Centimeters</option>
                                <option value="Millimeters">Millimeters</option>
                                <option value="Micrometers">Micrometers</option>
                                <option value="Nanometers">Nanometers</option>
                                <option value="Picometers">Picometers</option>
                                <option value="Nautical miles">Nautical miles</option>
                                <option value="Miles">Miles</option>
                                <option value="Yards">Yards</option>
                                <option value="Foots">Foots</option>
                            </select>
                            <input type="text" className='answers' maxLength="4" value={values} readOnly />

                        </div>
                        <div id="second">
                            <select name="length1" id="length1" className="buttons select">
                                <option value="" selected disabled hidden>Units..</option>
                                <option value="Kilometers">Kilometers</option>
                                <option value="Meters">Meters</option>
                                <option value="Decimeters">Decimeters</option>
                                <option value="Centimeters">Centimeters</option>
                                <option value="Millimeters">Millimeters</option>
                                <option value="Micrometers">Micrometers</option>
                                <option value="Nanometers">Nanometers</option>
                                <option value="Picometers">Picometers</option>
                                <option value="Nautical miles">Nautical miles</option>
                                <option value="Miles">Miles</option>
                                <option value="Yards">Yards</option>
                                <option value="Foots">Foots</option>

                            </select>
                            <input type="text" className='answers' value={distancevalue} readOnly />
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

        </div>
    )
}

export default Distance
