import { useState, useEffect } from "react"
import CheckListItem from "./ChecklistItem"

export default function Checklists(props) {

    const { checklist } = props;

    const [currentChecklist, setCurrentChecklist] = useState(checklist)

    useEffect(() => {
        setCurrentChecklist(checklist)
    }, [checklist])

    function toNextPage() {
        console.log("next page clicked")
        if (currentChecklist && currentChecklist.next) {
            setCurrentChecklist({ ...currentChecklist.next, previous: currentChecklist })
        } else {
            console.error("next checklist is undefined")
        }
    }

    function toPreviousPage() {
        console.log("previous clicked")
        if (currentChecklist && currentChecklist.previous) {
            setCurrentChecklist(currentChecklist.previous)
        } else {
            console.error("previous checklist is undefined")
        }
    }

    console.log(currentChecklist)


    return (
        <section className="checklist-container">
            <div className="checklist-title">
                <h2>{currentChecklist?.name}</h2>
            </div>
            <div className="checklist">
                <ul>
                    {currentChecklist?.checkLists.map((checklistItem, index) => {
                        return <CheckListItem key={index} checklistItem={checklistItem} />
                    })}
                </ul>
            </div>
            <button className="next-page" onClick={toNextPage}>Next Page</button>
            <button className="previous-page" onClick={toPreviousPage} disabled={!currentChecklist?.previous}>Previous Page</button>
        </section>
    )
}