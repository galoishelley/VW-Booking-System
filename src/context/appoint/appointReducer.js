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

const appointReducer = (state, action) => {
  switch (action.type) {
    case KEEP_SELECTED_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.spaname === action.payload)
      };
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload
      };
    case SET_DATA_PICKER:
      return {
        ...state,
        showDataPicker: action.payload
      };
    case SET_SELECTED_TIME:
      return {
        ...state,
        selectedTime: action.payload
      };
    case SET_ORDER_DATE:
      return {
        ...state,
        order: { ...state.order, app_date: action.payload }
      };
    case SET_ORDER_NAME:
      return {
        ...state,
        order: { ...state.order, spaname: action.payload.spaname, spanote: action.payload.spanote }
      };
    case SET_ORDER_TIME:
      return {
        ...state,
        order: { ...state.order, app_time: action.payload.app_time }
      };
    case SET_ORDER_PERSONAL_INFO:
      return {
        ...state,
        order: { ...state.order, fname: action.payload.fname, lname: action.payload.lname, phone: action.payload.phone, email: action.payload.email }
      };
    case CLEAR_ORDER:
      return {
        ...state,
        order: ''
      };
    case  SET_TMP_TIME:
      return {
        ...state,
        tmpTime: action.payload
      };
      case GET_ORDEREDTIME:
        return {
          ...state,
          orderedtime: action.payload
        };
    default:
      return state;
  }
};

export default appointReducer;

