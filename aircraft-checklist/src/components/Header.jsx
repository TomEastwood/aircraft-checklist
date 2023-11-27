import aircraftIcon from '../assets/aircraftIcon.svg';
import '../styles/header.css';

export default function Header () {
    return (
        <header>
            <h1>Aircraft Checklist</h1>
            <img className="aircraftIcon" src={aircraftIcon} alt="Aircraft Icon" />
        </header>
    )
}