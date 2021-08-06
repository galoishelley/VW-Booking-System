import {
  SET_CURRENT_ITEM,
  SET_DATA_PICKER,
  SET_SELECTED_TIME,
  SET_ORDER_TIME,
  KEEP_SELECTED_ITEM,
  SET_CURRENT_STEP,
  SET_SELECT_DATE
} from '../types';
import { formatDate } from  '../../components/shared/misc';

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
    case SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload
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
      case SET_SELECT_DATE:
        if(action.payload === ''){
          action.payload = formatDate(new Date());
        }
        return {
          ...state,
          selectedDate: action.payload
        };
    case SET_ORDER_TIME:
      const { order } = state
      if( action.payload.mark === 'appointInfo'){
        order.appointInfo = action.payload
      }
      if( action.payload.mark === 'personalInfo'){
        order.personalInfo = action.payload
      }
    
      return {
        ...state,
        order
      };
    default:
      return state;
  }
};


export default appointReducer;