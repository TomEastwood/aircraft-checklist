export default function ChecklistItem (props) {

    const { checklistItem } = props;

    function onCompletedClick () {
        !checklist.completed
        console.log("completed clicked", checklistItem.task)
    }

    return (
        <li className = "checklist-item">
            <div className = "checklist-item-title">
                <h3>{checklistItem.task}</h3>
            </div>
            <div className = "status">
                <button className = "completed-task" onClick={onCompletedClick}>{checklistItem.completed}</button>
            </div>
        </li>
    )
}