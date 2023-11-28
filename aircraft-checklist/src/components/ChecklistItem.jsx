export default function ChecklistItem (props) {

    const { checklist } = props;

    function onCompletedClick () {
        !checklist.completed
        console.log("completed clicked", checklist)
    }

    return (
        <li className = "checklist-item">
            <div className = "checklist-item-title">
                <h3>{checklist.task}</h3>
            </div>
            <div className = "status">
                <button className = "completed-task" onClick={onCompletedClick}>{checklist.completed}</button>
            </div>
        </li>
    )
}