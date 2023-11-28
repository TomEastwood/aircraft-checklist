import Checklists from "./Checklists";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import aircraftChecklists from "../aircraft-data/index.js"

export default function ChecklistPage () {

    const { aircraft } = useParams();
    console.log(aircraft);
    const [checklist, setChecklist] = useState([]);

    useEffect(() => {
        setChecklist(aircraftChecklists[aircraft].list);
    }, [aircraft]);

    console.log(checklist);



    return (
        <>
        <Checklists checklist={checklist} />
        </>
    )
}