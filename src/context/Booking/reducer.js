import * as types from './types';

const bookingReducer = (state, action) => {
  switch (action.type) {
    case types.MAKE_RESERVATION:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        categories: [...state.categories],
      };

    default:
      return state;
  }
};

export default bookingReducer;
