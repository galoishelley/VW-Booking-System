import React, { useReducer } from 'react';
import infoContext from './infoContext';
import infoReducer from './infoReducer';
// import {
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_CONTACT,
//   FILTER_CONTACTS,
//   CLEAR_FILTER,
// } from '../types';


const InfoState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    fname: 'GRACE',
    lname: 'Miao',
    phone: null,
    email: null,
  };

  const [state, dispatch] = useReducer(infoReducer, initialState);

  return (
    <infoContext.Provider
      value={{
        fname: state.fname,
        lname: state.lname,
        phone: state.phone,
        email: state.email
      }}
    >
      {props.children}
    </infoContext.Provider>
  );
};

export default InfoState;
