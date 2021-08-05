import React, { useContext } from 'react';
import AppointContext from '../../context/appoint/appointContext';
import { useHistory  } from 'react-router-dom';

const ResultMsg = () => {

    const appointContext = useContext(AppointContext);

    const { order,setCurrentStep } = appointContext;

    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        // setOrderItem(info);
        setCurrentStep(1);

        history.push('/');
    };


    return (
        <div>
            <h1>{order.personalInfo.fname} {order.personalInfo.lname}</h1>
           <h2>{order.appointInfo.app_date} { order.appointInfo.app_time}</h2>
            <h4> { order.appointInfo.spanote}</h4>
            <div>
                <input type="submit" value='Cancel'  onClick={onSubmit}  className="btn btn-dark btn-block" />
                <input type="submit" value='Reschedule' onClick={onSubmit}   className="btn btn-dark btn-block" />
            </div>
            <div>
                <input type="submit" value='Schedule another Appointment &gt;&gt;'  onClick={onSubmit}  className="btn btn-block btn-second" />
                {/* <i class="fas fa-angle-double-right"></i> */}
            </div>
        </div>
    )
}

export default ResultMsg;
