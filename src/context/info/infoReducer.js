import {
  ADD_INFO
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        infos: [...state.infos, action.payload],
        loading: false
      };
    default:
      return state;
  }
};
