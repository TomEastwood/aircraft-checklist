import { useState } from "react"
import CheckListItem from "./ChecklistItem"

export default function Checklists (props) {

    
    const { aircraftChecklist } = props;
    
    const [currentChecklist, setCurrentChecklist] = useState(aircraftChecklist)
    
    function toNextPage () {
        console.log("next page clicked")
        setCurrentChecklist({...currentChecklist.next, previous: currentChecklist})
    }
    console.log(currentChecklist)
    console.log("checklist", currentChecklist.checkLists)

    function toPreviousPage () {
        console.log("previous clicked")
        setCurrentChecklist(currentChecklist.previous)
    }
    
    
    return (
        <section className = "checklist-container">
            <div className = "checklist-title">
                <h2>{currentChecklist.name}</h2>
            </div>
            <div className = "checklist">
                <ul>
                    {currentChecklist.checkLists.map(checklist => 
                        <CheckListItem key={checklist.id} checklist={checklist} />
                    )}
                </ul>
            </div>
            <button className = "next-page" onClick={toNextPage}>Next Page</button>
            <button className = "previous-page" onClick={toPreviousPage} disabled={!currentChecklist.previous}>Previous Page</button>
        </section>
    )
}