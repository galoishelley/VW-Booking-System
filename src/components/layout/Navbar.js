import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppointContext from '../../context/appoint/appointContext';

const Navbar = ({ title, instruction }) => {
    const appointContext = useContext(AppointContext);
    const { currentStep } = appointContext;

    return (
        <div className="navbar">
            <h1 className="large">
                {title}
            </h1>
            <p>{instruction}</p>
            <ul>
                <li>
                    <Link to='#' className={currentStep === 1 ? "active" : ""} >Choose Appointment</Link>
                </li>
                <li>
                    <Link to='#' className={currentStep === 2 ? "active" : ""} >Your Info</Link>
                </li>
                <li>
                    <Link to='#' className={currentStep === 3 ? "active" : ""}>Comfirmation</Link>
                </li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Book a wellness session.',
    instruction: 'Visit one of our expert consultants to get yourself feeling 100% again.'
}

export default Navbar;