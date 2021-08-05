import React, { useReducer } from 'react';
import AppointContext from './appointContext';
import appointReducer from './appointReducer';

import {
  SET_CURRENT_ITEM,
  SET_DATA_PICKER,
  SET_SELECTED_TIME,
  SET_ORDER_TIME,
  KEEP_SELECTED_ITEM,
  SET_CURRENT_STEP,
  SET_SELECT_DATE
} from '../types';

const AppointState = props => {
  const initialState = {
    appointments: [
      {
        username: 'grace',
        spaname: 'Physiotherapy',
        spanote: '30 minutes@ $45.00',
        app_time: '10:30am',
        app_date: '08-20-2021',
      },
      {
        username: 'alex',
        spaname: 'chiro',
        spanote: '30 minutes@ $100.00',
        app_time: '12:30am',
        app_date: '08-20-2021',
      },
      {
        username: 'andrew',
        spaname: 'Aroma Therapy',
        spanote: '30 minutes@ $45.00',
        app_time: '4:00pm',
        app_date: '08-06-2021',
      }
    ],
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
        date: '08-06-2021',
        time: '4:00pm'
      }
    ],
    timeArr: ['10:00am', '10:30am', '11:00am', '11:30am', '12:00am', '12:30am', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm'],
    currentItem: {
      spaname: '',
      spanote: ''
    },
    showDataPicker: null,
    selectedDate:null,
    selectedTime: [],
    order:
    {
        appointInfo:{
          spaname: '',
          spanote: '',
          app_time: '',
          app_date: ''
        },
        personalInfo:{
          fname: '',
          lname: '',
          phone: '',
          email: ''
        }
    },
      currentStep:1
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

  //Set Current Item
  const setCurrentItem = currentItem => {
    dispatch({ type: SET_CURRENT_ITEM, payload: currentItem });
  };

  //Set DataPicker
  const setShowDataPicker = () => {
    dispatch({ type: SET_DATA_PICKER, payload: true });
  };

  //Set DataPicker
  const setSelectedTime = selectedTime => {
    dispatch({ type: SET_SELECTED_TIME, payload: selectedTime });
  };

  //Set order
  const setOrderItem = order => {
    dispatch({ type: SET_ORDER_TIME, payload: order });
  };

  //Set select date
  const setSelectedDate = selectedDate => {
    dispatch({ type: SET_SELECT_DATE, payload: selectedDate });
  };

  return (
    <AppointContext.Provider
      value={{
        appointments: state.appointments,
        items: state.items,
        orderedates: state.orderedates,
        timeArr: state.timeArr,
        currentItem: state.currentItem,
        showDataPicker: state.showDataPicker,
        selectedTime: state.selectedTime,
        order: state.order,
        currentStep: state.currentStep,
        selectedDate: state.selectedDate,
        setCurrentItem,
        setShowDataPicker,
        setSelectedTime,
        setOrderItem,
        keepSelectedItem,
        setCurrentStep,
        setSelectedDate
      }}
    >
      {props.children}
    </AppointContext.Provider>
  );
};

export default AppointState;
