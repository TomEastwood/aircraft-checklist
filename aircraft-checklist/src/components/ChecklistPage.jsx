import Checklists from "./Checklists";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import aircraftChecklists from "../aircraft-data/index.js"

export default function ChecklistPage () {

    const { aircraft } = useParams();
    console.log(aircraft);
    const [checklists, setChecklists] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const selectedAircraft = aircraftChecklists[aircraft];
        if (selectedAircraft) {
            setChecklists(selectedAircraft.list);
            setLoading(false);
        } else {
             setChecklists([]);
             setLoading(false);
        }
    }, [aircraft]);

    console.log(checklists);



    return (
        <>
        {loading ? (
            <p>Loading...</p>
        ) : (
            <Checklists checklist={checklists} />
        )}
        </>
    )
}