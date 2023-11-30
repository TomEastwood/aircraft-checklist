import { useState, useEffect } from "react"
import CheckListItem from "./ChecklistItem"
import "../styles/checklist.css"

let globalItemIdCounter = 1;

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

    globalItemIdCounter += currentChecklist?.checkLists.length

    const checklistItems = currentChecklist?.checkLists.map((checklistItem, index) => ({
        ...checklistItem,
        id: globalItemIdCounter + index,
    }));

    return (
        <section className="checklist-container">
            <div className="checklist-title">
                <h2>{currentChecklist?.name}</h2>
            </div>
            <div className="checklist">
                <ul>
                    {checklistItems?.map((checklistItem) => {
                        return <CheckListItem key={checklistItem.id} checklistItem={checklistItem} />
                    })}
                </ul>
            </div>
            <div className="buttons-container">
                <button className="previous-page" onClick={toPreviousPage} disabled={!currentChecklist?.previous}>Previous Page</button>
                <button className="next-page" onClick={toNextPage}>Next Page</button>
            </div>
        </section>
    )
}