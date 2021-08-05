import React, { useContext } from 'react'
import InfoForm from './infoForm';
import AppointContext from '../../context/appoint/appointContext';
import { Link } from 'react-router-dom';

const Info = () => {

    const appointContext = useContext(AppointContext);

    const { order,setCurrentStep } = appointContext;

    const handleGoBack = () =>{
        setCurrentStep(1);
    }

    return (
        <div className='Info'>
            <h5>{order.appointInfo.spaname} {order.appointInfo.app_date} {order.appointInfo.app_time}</h5>
            {/* <h5>{order.appointInfo.app_date}</h5>
            <h5>{order.appointInfo.app_time}</h5> */}
            <Link to="/" onClick={handleGoBack}>&lt;&lt;Change</Link>
            <InfoForm />
        </div>
    )
}

export default Info;
