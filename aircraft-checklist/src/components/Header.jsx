import aircraftIcon from '../assets/aircraftIcon.svg';
import '../styles/header.css';
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <Link to="/">
            <header>
                <h1>Aircraft Checklist</h1>
                <img className="aircraftIcon" src={aircraftIcon} alt="Aircraft Icon" />
            </header>
        </Link>
    )
}