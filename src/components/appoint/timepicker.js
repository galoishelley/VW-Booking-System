import React, { useContext,useEffect,useState } from 'react';
import AppointContext from '../../context/appoint/appointContext';
import AlertContext from '../../context/alert/alertContext';
import { Link } from 'react-router-dom';

const Timepicker = (selectDate) => {

    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    const appointContext = useContext(AppointContext);
    const { timeArr, currentItem, selectedTime,setOrderItem,setCurrentStep} = appointContext;

    var tmpTime =  new Array(timeArr);

    useEffect(() => {

        const occupied__slots= selectedTime;
        for(let i=0; i<occupied__slots.length; i++){
            const index = tmpTime[0].indexOf("4:00pm");
                if (index > -1) {
                    tmpTime[0].splice(index, 1);
                }
        }
        //eslint-disable-next-line
    }, [selectDate]);

    const [stime, setStime] = useState({
            mark:'appointInfo',
            spaname: currentItem.spaname,
            spanote: currentItem.spanote,
            app_time: '',
            app_date: selectDate.selectDate
    });

    const onChange = e => setStime({ ...stime, [e.target.name]: e.target.value });

    const { app_time } = stime;

    const onSet = e => {
        if(app_time==='')
        {
            e.preventDefault()
            setAlert('please select one time', 'test');
            return;
        };

        setOrderItem(stime);
        setCurrentStep(2);
    }

    return (
        <div className="Timepicker">
            <ul>
                { 
                    tmpTime[0].map(time =>(
                        <li key={time}><input type="radio" value={ time} id={time} name="app_time" onChange={onChange} /><label htmlFor={time}>{time}</label></li>
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