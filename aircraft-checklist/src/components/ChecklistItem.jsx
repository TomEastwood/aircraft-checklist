import "../styles/checklistItem.css"
import { useState } from "react"

export default function ChecklistItem (props) {

    const { checklistItem } = props;

    const [completed, setCompleted] = useState(checklistItem.completed)

    function onCompletedClick () {
        setCompleted(prevCompleted => !prevCompleted)   
        console.log("completed clicked", completed)
    }

    const buttonStyle = {
        height: "2rem",
        width: "2rem",
        backgroundColor: completed ? "green" : "red",
        border: "solid 1px black",
    }

    return (
        <li className = "checklist-item">
            <div className = "checklist-item-title">
                <h3>{checklistItem.task}</h3>
            </div>
            <div className = "status">
                <button style={buttonStyle} onClick={onCompletedClick}>{checklistItem.completed}</button>
            </div>
        </li>
    )
}