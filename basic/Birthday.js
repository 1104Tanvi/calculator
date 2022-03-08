import React, { useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaBirthdayCake } from "react-icons/fa";
import './dob.css'
import * as math from 'mathjs'
function Birthday() {

    const [pickdate, changedate] = useState(new Date())
    const [pickdate2, changedate2] = useState(new Date())
    const [days, ] = useState(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])

    const funct1 = (date) => {
        changedate2(prevalue=>prevalue=date)
        console.log(pickdate2.getFullYear())
        if (pickdate2.getFullYear() > pickdate.getFullYear()) {
            var diff = math.evaluate(pickdate2.getTime() + "-" + pickdate.getTime())
            var age = math.evaluate(pickdate2.getFullYear() + "-1-" + pickdate.getFullYear())
            if (pickdate2.getMonth() < pickdate.getMonth()) {
                var month = math.evaluate("(12-" + pickdate.getMonth() + ")+" + pickdate2.getMonth() + "-1")
            }
            else {
                 month = math.evaluate(pickdate2.getMonth() + "-" + pickdate.getMonth())
            }
            if (pickdate2.getDate() < pickdate.getDate()) {
                var dayss = math.evaluate("(" + (new Date(pickdate.getFullYear(), pickdate.getMonth() + 1, 0).getDate()) + "-" + pickdate.getDate() + ")+" + pickdate2.getDate())
                var leftdays = math.evaluate(pickdate.getDate() + "-" + pickdate2.getDate())
                console.log(leftdays)
            }
            else {
                 dayss = math.evaluate(pickdate2.getDate() + "-" + pickdate.getDate())
                 leftdays = math.evaluate("(" + (new Date(pickdate2.getFullYear(), pickdate2.getMonth() + 1, 0).getDate()) + "-" + pickdate2.getDate() + ")+" + pickdate.getDate())
            }
            if ((pickdate2.getMonth() < pickdate.getMonth() || pickdate2.getMonth() === pickdate.getMonth()) && pickdate2.getDate() < pickdate.getDate()) {
                var day = days[new Date(pickdate2.getFullYear(), pickdate.getMonth(), pickdate.getMonth()).getDay()]
            } else if ((pickdate2.getMonth() > pickdate.getMonth() || pickdate2.getMonth() === pickdate.getMonth()) && pickdate2.getDate() > pickdate.getDate()) {
                 day = days[new Date(pickdate2.getFullYear() + 1, pickdate.getMonth(), pickdate.getMonth()).getDay()]
            }
            if (pickdate2.getMonth() < pickdate.getMonth()) {
                var leftmonths = math.evaluate(pickdate.getMonth() + "-" + pickdate2.getMonth())
            }
            else if (pickdate2.getMonth() > pickdate.getMonth()) {
                 leftmonths = math.evaluate("(12-" + pickdate2.getMonth() + ")+" + pickdate.getMonth())
            }
            else {
                 leftmonths = "0"
            }

            var totmonths = parseFloat(math.evaluate("(" + diff + "/" + 2629746000 + ")-1")).toFixed(0)
            var totweeks = parseFloat(math.evaluate("(" + diff + "/" + 604800000 + ")-1")).toFixed(0)
            var totdays = parseFloat(math.evaluate("(" + diff + "/" + 86400000 + ")")).toFixed(0)
            var tothours = parseFloat(math.evaluate("(" + diff + "/" + 3600000 + ")")).toFixed(0)
            var totminutes = parseFloat(math.evaluate("(" + diff + "/" + 60000 + ")")).toFixed(0)

            document.getElementById("update1").innerText = `${age}`;
            document.getElementById("update2").innerText = `${month} months | `;
            document.getElementById("update3").innerText = `${dayss} days`;
            document.getElementById("update4").innerText = `${day}`;
            document.getElementById("update5").innerText = `${leftmonths} months | `;
            document.getElementById("update6").innerText = `${leftdays} days`;
            document.getElementById("update7").innerText = `${age}`;
            document.getElementById("update8").innerText = `${totmonths}`;
            document.getElementById("update9").innerText = `${totweeks}`;
            document.getElementById("update10").innerText = `${totdays}`;
            document.getElementById("update11").innerText = `${tothours}`;
            document.getElementById("update12").innerText = `${totminutes}`;
        }
        else {

            alert(`Select a year which is greater than your birthday year.`)
        }

    };







    return (
        <div>
            <div id="dob">
                <span className="firstlevel">Date of birth -</span>
                <Datepicker className="firstlevel" selected={pickdate} onChange={date => changedate(date)} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown scrollableMonthYearDropdown />
            </div>
            <div id="today">
                <span className="secondlevel">Today -</span>
                <Datepicker className="secondlevel" selected={pickdate2} onChange={funct1} dateFormat="dd/MM/yyyy" showYearDropdown showMonthDropdown scrollableMonthYearDropdown />
            </div>
            <div id="whole">
                <div id="initialsummary">
                    <div id="currentAge">
                        <div className="list1">Age</div>
                        <div className="littlespace">
                            <span className="list2" id="update1">0</span>
                            <span>years</span>
                        </div>
                        <div>
                            <span id="update2">0 month | </span>
                            <span id="update3">0 days</span>
                        </div>
                    </div>
                    <div id="verticalline"></div>
                    <div id="nextAge">
                        <div className="next">Next birthday</div>
                        <div><FaBirthdayCake size="30px" /></div>
                        <div className="little" id="update4">Day</div>
                        <div>
                            <span id="update5">0 month | </span>
                            <span id="update6">0 days</span>
                        </div>
                    </div>
                </div>
                <div className="summa">
                    Summary
            </div>
                <div id="firstclass">
                    <div className="head firsthead">
                        <span>Years</span>
                        <span>Months</span>
                        <span>Weeks</span>
                    </div>
                    <div className="head secondhead">
                        <span id="update7">0</span>
                        <span id="update8">0</span>
                        <span id="update9">0</span>
                    </div>
                </div>
                <div className="head thirdhead">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Minutes</span>
                </div>
                <div className="head fourthead">
                    <span id="update10">0</span>
                    <span id="update11">0</span>
                    <span id="update12">0</span>
                </div>
            </div>

        </div>
    )
}

export default Birthday
