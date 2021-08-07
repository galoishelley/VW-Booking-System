import React, { useState, useContext} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import AppointContext from '../../context/appoint/appointContext';
import Timepicker from './timepicker';
import { formatDate,cTime } from '../shared/misc';

const Datepicker = () => {

  const appointContext = useContext(AppointContext);
  const { orderedates, timeArr, setSelectedTime, setOrderDate, setTmpTime } = appointContext;

  //it's full booking date
  const excludeDates = [];

  const arrAppoint = [];

  // useEffect(() => {
  //   setTmpTime(cTime);
  // },[order.app_date]);

  //get exclude Dates
  const getDate = () => {
    let map = new Map();
    let array = [];
    let arrTime = [];

    //Remove duplicate data
    for (let i = 0; i < orderedates.length; i++) {
      if (map.has(orderedates[i].date)) {
        map.set(orderedates[i].date, true);
      } else {
        map.set(orderedates[i].date, false);
        array.push(orderedates[i].date);
      }
    }

    //check time
    for (let j = 0; j < array.length; j++) {
      arrTime = [];
      for (let i = 0; i < orderedates.length; i++) {
        if (orderedates[i].date === array[j]) {
          arrTime.push(orderedates[i].time)
        }
      }

      //order date & order time eg:8-12-21 1:00pm 1:30pm
      arrAppoint.push({ date: array[j], time: arrTime })

      if (JSON.stringify(arrTime) === JSON.stringify(timeArr)) {
        excludeDates.push(new Date(array[j]));
      }
    }

  };

  getDate();

  const [startDate, setStartDate] = useState(new Date());
  const minDate = new Date()

  //when you click different date
  const handleChange = (date) => {

    setStartDate(date);

    let fDate = formatDate(date);

    setOrderDate(fDate);

    let orderedDateTime = [];

    for (let i = 0; i < arrAppoint.length; i++) {
      if (arrAppoint[i].date === fDate) {
        orderedDateTime.push(arrAppoint[i].time);
      }
    }

    //have ordered time
    // setTmpTime(cTime);
    setSelectedTime(orderedDateTime);
    

  };

  //init datepicker's years & months drop down item
  const years = ['2021', '2022'];
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
        minDate={minDate}
        excludeDates={excludeDates}
        onChange={handleChange}
        inline
      />

      <div>
        <h4>please select a time</h4>
        <Timepicker />
      </div>
    </div>
  );
}

export default Datepicker;