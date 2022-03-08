import React, { useState } from 'react'
import './buttonstyles.css'
import { RiAddLine, RiCloseLine, RiDivideLine, RiSubtractLine } from "react-icons/ri";
import { BsFillBackspaceFill } from "react-icons/bs";
import { GiExpander } from "react-icons/gi";
import { FaSquareRootAlt } from "react-icons/fa";
import * as math from 'mathjs'



function Universalcal() {

    const [values, change] = useState("")
    const [names, how] = useState(["sin", "cos", "tan", "1"])
    const [left, now] = useState(["rad", "1"])
    const [past,addingtoit]=useState([])
    const [histindex,histidxchg]=useState("1")
    
    const design ={
    "background-color":'#555555' ,
    "text-shadow": '2px 2px 4px #807575',
    padding: '10px',
    "text-align": 'start',
    "list-style": 'none',
    "font-size": '25px'
    };

    const changing = (char) => {
        switch (char) {
            case '*':
                change(prevalue => prevalue + '*')
                
                break;
            case '#':
                change(values => values.slice(0, -1))
             
                break;
            case 'AC':
                change("")
                
                break;
            case '=':
                addingtoit(prev =>[...prev,values+" = "+math.evaluate(values)])
                change(prevalue => math.evaluate(prevalue) + "")
               
                break;
            default:
                change(prevalue => prevalue + char);
               
        }
    };

    const expands = () => {
        let answer = document.getElementById('answer');
        answer.style.width = "650px";
        document.getElementById('topper-topper-hidden').style.display = "unset";
        let array = document.getElementsByClassName('hidden');
        Array.from(array).forEach(element => element.style.visibility = "visible");
    };
    const contract = () => {
        let answer = document.getElementById('answer');
        answer.style.width = "500px";
        let array = document.getElementsByClassName('hidden');
        Array.from(array).forEach(element => element.style.visibility = "hidden");

    };

    const transform = () => {
        if (names[3] === "1")
            how(["asin", "acos", "atan", "0"])
        else
            how(["sin", "cos", "tan", "1"])
    };

    const toradordeg = () => {
        if (left[1] === "1")
            now(["deg", "2"])
        else
            now(["rad", "1"])
    }

    const historybox = () => {
        if(histindex === "1")
        {
        document.getElementById('histtxt').style.visibility='visible';
        document.getElementById('clearhist').style.visibility='visible';
        histidxchg("2")
        }
        else
        {
        document.getElementById('histtxt').style.visibility='hidden';
        document.getElementById('clearhist').style.visibility='hidden';
        histidxchg("1")
        }
    };
    const clearhistorybox = () => { 
       addingtoit([])
       
    };

    return (
        <div >
             <div id="instruction">
            <p id="heading">How to use it.</p>
            <div id="rules">
            <p className="listofrules">1)Want more options then click on expand btn and</p>    
            <p className="listofrules">to close double click the expand btn.</p> 
            <p className="listofrules">2)Write correct expressions to get answers.</p>
            <p className="listofrules">3)If you use an open bracket then keep in</p>
            <p className="listofrules">mind to put a closing bracket.</p>
            <p className="listofrules">4)In case of log if you want to use natural log</p>
            <p className="listofrules">just write log(x) otherwise write log(x,base)</p>
            <p className="listofrules">5)On clicking "2nd" btn the trignometric function</p>
            <p className="listofrules">will become inverse trignometric functions</p>
            <p className="listofrules">and vice versa.</p>
            <p className="listofrules">6)By clicking on rad it changes into deg</p>
            <p className="listofrules">and vice versa</p>
            <p className="listofrules">7)If want to use rad/deg click it twice </p>
            <p className="listofrules">8)Want to see history then click on history</p>
            <p className="listofrules">btn</p>
            </div>
            </div>
            
            
            
            <div id="history">
                <p>To check you history press this button</p>
                <button className="hist" onClick={historybox}>History</button>
                <div id="histtxt">
                   
                    {past.map((items,index) =>(
                         <li style={design} key="index">{index+1}) {items}</li>
                    ))}
                   
                </div>
                <button className="hist"id="clearhist" onClick={clearhistorybox}>Clear History</button>
            </div>
           
            <div id='box'>
                <input type="text"  id='answer'  value={values}  readOnly/>
                <div id='topper'>
                    <button className=' buttons calculator hidden'  onClick={() => changing('sqrt')}><FaSquareRootAlt color="rgb(80, 80, 221)" size="38" /></button>
                    <button className=' buttons calculator col' onClick={() => changing('AC')}>C</button>
                    <button className=' buttons calculator' onClick={() => changing('#')} ><BsFillBackspaceFill size="30"/></button>
                    <button className=' buttons calculator col' onClick={() => changing('%')} >%</button>
                    <button className=' buttons calculator divide tophidden'onClick={() => changing('/')}><RiDivideLine size="30" /></button>
                </div>
                <div id='top'>
                    <button className=' buttons calculator hidden' onClick={() => changing('!')}>X!</button>
                    <button className=' buttons calculator' onClick={() => changing(7)}>7</button>
                    <button className='buttons calculator' onClick={() => changing(8)}>8</button>
                    <button className=' buttons calculator' onClick={() => changing(9)}>9</button>
                    <button className=' buttons calculator' onClick={() => changing('*')} ><RiCloseLine /></button>
                </div>

                <div id='middle'>
                    <button className=' buttons calculator hidden' onClick={() => changing('1/')}>1/x</button>
                    <button className=' buttons calculator nos' onClick={() => changing(4)}>4</button>
                    <button className=' buttons calculator nos' onClick={() => changing(5)}>5</button>
                    <button className='buttons calculator nos' onClick={() => changing(6)}>6</button>
                    <button className='buttons calculator' onClick={() => changing('-')} ><RiSubtractLine /></button>
                </div>
                <div id='bottom'>
                    <button className=' buttons calculator hidden' onClick={() => changing('pi')}>Pi</button>
                    <button className=' buttons calculator nos' onClick={() => changing(1)}>1</button>
                    <button className=' buttons calculator nos' onClick={() => changing(2)}>2</button>
                    <button className=' buttons calculator nos' onClick={() => changing(3)}>3</button>
                    <button className=' buttons calculator' color="orange" onClick={() => changing('+')}><RiAddLine /></button>
                </div>
                <div id='bottom'>
                    <button className=' buttons calculator hidden' id="exp" onClick={() => changing('e')}>e</button>
                    <button className=' buttons calculator' id="expand" onClick={expands} onDoubleClick={contract}><GiExpander /></button>
                    <button className=' buttons calculator nos' onClick={() => changing(0)} >0</button>
                    <button className=' buttons calculator nos' onClick={() => changing('.')}>.</button>
                    <button className=' buttons calculator nos col' onClick={() => changing('=')} >=</button>
                </div>

                <div id='topper-hidden'>
                    <button className=' buttons calculator hidden' onClick={() => changing('^')} >^</button>
                    <button className='buttons calculator hidden' onClick={() => changing('log')} >Log</button>
                    <button className=' buttons calculator hidden' onClick={() => changing(',')}>,</button>
                    <button className=' buttons calculator hidden' onClick={() => changing('(')}>(</button>
                    <button className='buttons calculator hidden' onClick={() => changing(')')}>)</button>
                </div>

                <div id='topper-topper-hidden'>
                    <button className=' buttons calculator hidden' onClick={transform} >2nd</button>
                    <button className=' buttons calculator hidden degrad' id="der" onClick={toradordeg} onDoubleClick={() => changing(left[0])}>{left[0]}</button>
                    <button className='buttons calculator hidden sins' onClick={() => changing(names[0])}>{names[0]}</button>
                    <button className='buttons calculator hidden sins' onClick={() => changing(names[1])}>{names[1]}</button>
                    <button className='buttons calculator hidden sins' onClick={() => changing(names[2])}>{names[2]}</button>
                </div>
            </div>
        </div>
      
    )
}

export default Universalcal
