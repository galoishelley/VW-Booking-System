import React, { useReducer } from 'react';
import AppointContext from './appointContext';
import appointReducer from './appointReducer';

import {
  SET_DATA_PICKER,
  SET_SELECTED_TIME,
  KEEP_SELECTED_ITEM,
  SET_CURRENT_STEP,
  SET_ORDER_NAME,
  SET_ORDER_DATE,
  SET_ORDER_TIME,
  SET_ORDER_PERSONAL_INFO,
  CLEAR_ORDER,
  SET_TMP_TIME,
  GET_ORDEREDTIME
} from '../types';

const AppointState = props => {
  const initialState = {
    items: [
      {
        spaname: 'Physiotherapy',
        spanote: '30 minutes@ $45.00'
      },
      {
        spaname: 'chiro',
        spanote: '30 minutes@ $100.00'
      },
      {
        spaname: 'Aroma Therapy',
        spanote: '30 minutes@ $45.00'
      }
    ],
    orderedates: [
      {
        date: '08-20-2021',
        time: '10:00am'
      },
      {
        date: '08-20-2021',
        time: '10:30am'
      },
      {
        date: '08-20-2021',
        time: '11:00am'
      },
      {
        date: '08-20-2021',
        time: '11:30am'
      },
      {
        date: '08-20-2021',
        time: '12:00am'
      },
      {
        date: '08-20-2021',
        time: '12:30am'
      },
      {
        date: '08-20-2021',
        time: '1:00pm'
      },
      {
        date: '08-20-2021',
        time: '1:30pm'
      },
      {
        date: '08-20-2021',
        time: '2:00pm'
      },
      {
        date: '08-20-2021',
        time: '2:30pm'
      },
      {
        date: '08-20-2021',
        time: '3:00pm'
      },
      {
        date: '08-20-2021',
        time: '3:30pm'
      },
      {
        date: '08-20-2021',
        time: '4:00pm'
      },
      {
        date: '08-10-2021',
        time: '4:00pm'
      },
      {
        date: '08-10-2021',
        time: '3:00pm'
      },
      {
        date: '08-11-2021',
        time: '10:00am'
      },
    ],
    timeArr: ['10:00am', '10:30am', '11:00am', '11:30am', '12:00am', '12:30am', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'],
    showDataPicker: null,
    selectedTime: [],
    order:
    {
      spaname: '',
      spanote: '',
      app_time: '',
      app_date: '',
      fname: '',
      lname: '',
      phone: '',
      email: ''
    },
    currentStep: 1,
    tmpTime:'',
    orderedtime:[ '11:00am', '11:30am','12:00am', '12:30am']
  };

  const [state, dispatch] = useReducer(appointReducer, initialState);

  //keep selected item
  const keepSelectedItem = (spaname) => {
    dispatch({ type: KEEP_SELECTED_ITEM, payload: spaname });
  };

  //set currentstep
  const setCurrentStep = (currentStep) => {
    dispatch({ type: SET_CURRENT_STEP, payload: currentStep });
  };

  //Set DataPicker
  const setShowDatePicker = () => {
    dispatch({ type: SET_DATA_PICKER, payload: true });
  };

  //Set DataPicker
  const setSelectedTime = time => {
    dispatch({ type: SET_SELECTED_TIME, payload: time });
  };

  //set order name
  const setOrderName = item => {
    dispatch({ type: SET_ORDER_NAME, payload: item });
  };

  //set order date
  const setOrderDate = date => {
    dispatch({ type: SET_ORDER_DATE, payload: date });
  };

  //set order time 
  const setOrderTime = time => {
    dispatch({ type: SET_ORDER_TIME, payload: time });
  };

  //set Order Personal Info
  const setOrderPersonalInfo = info => {
    dispatch({ type: SET_ORDER_PERSONAL_INFO, payload: info });
  };

  //clear order
  const clearOrder =()=>{
    dispatch({ type: CLEAR_ORDER});
  }

  //set temp time
  const setTmpTime =(times)=>{
    dispatch({ type: SET_TMP_TIME, payload: times});
  }

  //get ordered time
  const getOrderedTime =(times)=>{
    dispatch({ type: GET_ORDEREDTIME, payload: times});
  }

  return (
    <AppointContext.Provider
      value={{
        items: state.items,
        orderedates: state.orderedates,
        timeArr: state.timeArr,
        showDataPicker: state.showDataPicker,
        selectedTime: state.selectedTime,
        order: state.order,
        currentStep: state.currentStep,
        tmpTime: state.tmpTime,
        orderedtime: state.orderedtime,
        setShowDatePicker,
        setSelectedTime,
        keepSelectedItem,
        setCurrentStep,
        setOrderName,
        setOrderDate,
        setOrderTime,
        setOrderPersonalInfo,
        clearOrder,
        setTmpTime,
        getOrderedTime
      }}
    >
      {props.children}
    </AppointContext.Provider>
  );
};

export default AppointState;
