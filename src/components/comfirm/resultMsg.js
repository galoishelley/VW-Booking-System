import React, { useContext } from 'react';
import AppointContext from '../../context/appoint/appointContext';
import { useHistory } from 'react-router-dom';
import { getWeekDay,formatDate,getMonthEn } from '../shared/misc';


const ResultMsg = () => {

    const appointContext = useContext(AppointContext);

    const { order, setCurrentStep, clearOrder } = appointContext;

    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        setCurrentStep(1);
        clearOrder();

        history.push('/');
    };

    const onHandleAppointment = ()=>{
        //commit this order
        history.push('/');
    }

    return (
        <div className='resultmsg'>
            <h1>{order.fname} {order.lname}</h1>
            <h2>{getWeekDay(formatDate(order.app_date,'YYYYMMDD'))} {getMonthEn(order.app_date)} </h2>
            <h3>{order.app_time}</h3>
            <h4> {order.spanote}</h4>
            <div>
                <input type="submit" value='Cancel' onClick={onSubmit} className="btn btn-dark btn-block" />
                <input type="submit" value='Reschedule' onClick={onSubmit} className="btn btn-dark btn-block" />
            </div>
            <div>
                <input type="submit" value='Schedule another Appointment &gt;&gt;' onClick={onHandleAppointment} className="btn btn-block btn-second" />
                {/* <i class="fas fa-angle-double-right"></i> */}
            </div>
        </div>
    )
}

export default ResultMsg;
