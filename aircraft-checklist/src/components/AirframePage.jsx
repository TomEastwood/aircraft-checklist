import "../styles/airframePage.css";
import aircraftChecklists from "../aircraft-data/index.js"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AirframePage () {

    const navigate = useNavigate();

    const [aircraftChecklist, setAircraftChecklist] = useState([]);
    const [dropdownValue, setDropdownValue] = useState(null)

    //function to look at the value of the aircraft dropdown and return the appropriate checklist into my state
    const getChecklist = (e) => {
        if (e.target.value === "select") {
            setAircraftChecklist([]);
            return 
        } 
        setAircraftChecklist(aircraftChecklists[e.target.value].list)
        setDropdownValue(e.target.value)
        console.log(aircraftChecklist);
    }

    //function to display the checklist when the button is clicked
    const displayChecklist = () => {
        if (aircraftChecklist.length === 0) {
            alert("Please select an aircraft from the dropdown menu");
        } else {
            console.log("display checklist");
            navigate(`/checklist/${dropdownValue}`)
        }
    }
    
    const availableChecklists = Object.keys(aircraftChecklists)

    return (
        <div className = "page-container">
            <div className = "title">
                <h2>My Aircraft</h2>
            </div>
            <div className = "subheader">
                <p>Please select your current aircraft from the list below to display its checklist.</p>
            </div>
            <div className = "aircraft-menu">
                <label htmlFor="aircraft">Aircraft</label>
                <select name="aircraftList" id="aircraftList" onChange={getChecklist}>
                    <option value="select">Select an Aircraft</option>
                    {availableChecklists.map(checklist =>
                        <option value={checklist}>{aircraftChecklists[checklist].aircraftName}</option>
                        ) 
                    }
                </select>
            </div>
            <button className = "toChecklist" type="button" onClick={displayChecklist}>View Checklist</button>
        </div>
    )
}