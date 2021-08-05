import React, { useState, useContext } from 'react';
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear,getMonth} from "date-fns";
import AppointContext from '../../context/appoint/appointContext';
import Timepicker from './timepicker';
import { formatDate } from  '../shared/misc';

const Datepicker = () => {

    const appointContext = useContext(AppointContext);
    const { orderedates, timeArr,setSelectedTime,setSelectedDate} = appointContext;
    //selectedDate
    //selectedTime

    const excludeDates =[];

    var arrAppoint = [];

  //   useEffect(() => {

  //     //eslint-disable-next-line
  // }, [currentItem,selectedDate]);

    const getDate = () =>{ 
        let map = new Map();
        let array = []; 
        let arrTime =[];
        

        //Remove duplicate data
        for (let i = 0; i < orderedates.length; i++) {
            if(map.has(orderedates[i].date)) {  
              map.set(orderedates[i].date, true); 
            } else { 
              map.set(orderedates[i].date, false);  
              array.push(orderedates[i].date);
            }
        }

        //check time
        for(let j = 0; j < array.length; j++){
            arrTime=[];
            for (let i = 0; i < orderedates.length; i++) {
                if(orderedates[i].date === array[j]) {  
                    arrTime.push(orderedates[i].time)
                } 
            }

            arrAppoint.push({date:array[j],time:arrTime})

            if( JSON.stringify(arrTime) === JSON.stringify(timeArr))
            {
                excludeDates.push(new Date(array[j]));
            }
        }

    };

    getDate();

    const [startDate, setStartDate] = useState(new Date());
    // const [minDate, setMinDate] = useState(new Date());
    const minDate = new Date()
    const [selectDate, setSelectDate] = useState(new Date());
    
    const handleCheckInDate = (date) => {

        setStartDate(date);
        

        let fData = formatDate(date);

        setSelectDate(fData);
        setSelectedDate(fData)
       
        let currentClickDate = [];
       

        for (let i = 0; i < arrAppoint.length; i++) {
          if(arrAppoint[i].date === fData) {  
            currentClickDate.push(arrAppoint[i].time);
          }
      }

      setSelectedTime(currentClickDate);

    };

    // const handleCheckOutDate = (date) => {
    //   // setCheckOutDate(date);
    // };
    
    const years = ['2021','2022'] ;
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div>
    <DatePicker
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            value={getYear(date)}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
        selected={startDate}
        // onChange={(date) => setStartDate(date)}
        minDate={minDate}
        excludeDates={excludeDates}
        onChange={handleCheckInDate}
        inline
      />

        <div>
            <h4>please select a time</h4>
            <Timepicker selectDate={formatDate(selectDate)}/>
        </div>
      </div>
    );
}

export default Datepicker;