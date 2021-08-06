import React, { useContext, useEffect, useState } from 'react';
import AppointContext from '../../context/appoint/appointContext';
import AlertContext from '../../context/alert/alertContext';
import { Link } from 'react-router-dom';
// import { cTime } from '../shared/misc';

const Timepicker = () => {

    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    const appointContext = useContext(AppointContext);
    const { timeArr, selectedTime, setCurrentStep, order, setOrderTime, tmpTime, setTmpTime } = appointContext;

    const t = tmpTime;

    //const times
    useEffect(() => {

        setTmpTime(timeArr);

        //delete have booked time
        selectedTime.map(time => {
            for (let i = 0; i < time.length; i++) {
                const index = t.indexOf(time[i]);
                if (index > -1) {
                    t.splice(index, 1);
                }
            }
        });

        setTmpTime(t);

        //eslint-disable-next-line
    }, [order.app_date, selectedTime]);

    const [stime, setStime] = useState({
        app_time: '',
    });

    const onChange = e => setStime({ ...stime, [e.target.name]: e.target.value });

    const { app_time } = stime;

    const onSet = e => {
        if (app_time === '') {
            e.preventDefault()
            setAlert('please select one time', 'test');
            return;
        };

        //set order time
        setOrderTime(stime);

        setCurrentStep(2);
    }

    return (
        <div className="Timepicker">
            <ul>
                {
                    t && t.map(time => (
                        <li key={time}><input type="radio" value={time} id={time} name="app_time" onChange={onChange} /><label htmlFor={time}>{time}</label></li>
                    ))

                }
            </ul>
            <div>
                <Link to="/info" className="btn btn-dark btn-block" onClick={onSet}>Continue &gt;&gt;</Link>
            </div>
        </div>
    );
}

export default Timepicker;