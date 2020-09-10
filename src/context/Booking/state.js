import React, { useReducer } from 'react';
import bookingState from './context';
import bookingReducer from './reducer';
import * as types from './types';
import { imagesGlobal } from '../../constants/index';
const CATEGORIES = [
  {
    id: 1,
    title: 'Salud y Bienestar',
    image: imagesGlobal.IMG_SALUD,
    subcategories: [
      { name: 'tenis' },
      { name: 'football' },
      { name: 'basketball' },
    ],
    place: 'Cancha múltiple',
    observations:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada lectus vitae lobortis vulputate.      Fusce ex purus, dignissim nec ornare at, rhoncus nec quam. Nullam orci enim, accumsan in odio sed, lobortis sagittis tortor. Sed fringilla rhoncus cursus. Proin arcu',
    price: 'No tiene costo la reserva',
    schedule: {
      schedules: [
        { id: 0, start: '07: 00AM', end: '08:00AM', available: true },
        { id: 1, start: '08: 00AM', end: '09:00AM', available: false },
        { id: 2, start: '09: 00AM', end: '10:00AM', available: true },
        { id: 3, start: '10: 00AM', end: '11:00AM', available: true },
        { id: 4, start: '11: 00AM', end: '12:00PM', available: true },
        { id: 5, start: '12: 00PM', end: '01:00PM', available: true },
        { id: 6, start: '01: 00PM', end: '02:00PM', available: true },
        { id: 7, start: '02: 00PM', end: '03:00PM', available: true },
      ],
    },
  },
  {
    id: 2,
    title: 'Deportes',
    image: imagesGlobal.IMG_DEPORTES,
    subcategories: [
      { name: 'tenis' },
      { name: 'football' },
      { name: 'basketball' },
    ],
    place: 'Cancha exterior',
    observations:
      'Sed malesuada lectus vitae lobortis vulputate.      Fusce ex purus, dignissim nec ornare at, rhoncus nec quam. Nullam orci enim, accumsan in odio sed, lobortis sagittis tortor. Sed fringilla rhoncus cursus. Proin arcu',
    price: 'No tiene costo la reserva',
    schedule: {
      schedules: [
        { id: 0, start: '07: 00AM', end: '08:00AM', available: true },
        { id: 1, start: '08: 00AM', end: '09:00AM', available: false },
        { id: 2, start: '09: 00AM', end: '10:00AM', available: false },
        { id: 3, start: '10: 00AM', end: '11:00AM', available: false },
        { id: 4, start: '11: 00AM', end: '12:00PM', available: false },
        { id: 5, start: '12: 00PM', end: '01:00PM', available: false },
      ],
    },
    available: true,
  },
  {
    id: 3,
    title: 'Entretenimiento',
    image: imagesGlobal.IMG_ENTRETENIMIENTO,
    subcategories: [
      { name: 'tenis' },
      { name: 'football' },
      { name: 'basketball' },
    ],
    place: 'Cancha exterior',
    observations:
      'Sed malesuada lectus vitae lobortis vulputate.      Fusce ex purus, dignissim nec ornare at, rhoncus nec quam. Nullam orci enim, accumsan in odio sed, lobortis sagittis tortor. Sed fringilla rhoncus cursus. Proin arcu',
    price: 'No tiene costo la reserva',
    schedule: {
      schedules: [
        { id: 0, start: '07: 00AM', end: '08:00AM', available: true },
        { id: 1, start: '08: 00AM', end: '09:00AM', available: true },
        { id: 2, start: '09: 00AM', end: '10:00AM', available: true },
        { id: 3, start: '10: 00AM', end: '11:00AM', available: true },
        { id: 4, start: '11: 00AM', end: '12:00PM', available: true },
        { id: 5, start: '12: 00PM', end: '01:00PM', available: true },
      ],
    },
    available: true,
  },
  {
    id: 4,
    title: 'Salones',
    image: imagesGlobal.IMG_SALONES,
    subcategories: [
      { name: 'tenis' },
      { name: 'football' },
      { name: 'basketball' },
    ],
    place: 'Cancha exterior',
    observations:
      'Sed malesuada lectus vitae lobortis vulputate.      Fusce ex purus, dignissim nec ornare at, rhoncus nec quam. Nullam orci enim, accumsan in odio sed, lobortis sagittis tortor. Sed fringilla rhoncus cursus. Proin arcu',
    price: 'No tiene costo la reserva',
    schedule: {
      schedules: [
        { id: 0, start: '07: 00AM', end: '08:00AM', available: true },
        { id: 1, start: '08: 00AM', end: '09:00AM', available: false },
        { id: 2, start: '09: 00AM', end: '10:00AM', available: true },
        { id: 3, start: '10: 00AM', end: '11:00AM', available: false },
        { id: 4, start: '11: 00AM', end: '12:00PM', available: true },
        { id: 5, start: '12: 00PM', end: '01:00PM', available: false },
      ],
    },
    available: true,
  },
];

const BOOKINGS = [];

const BookingState = ({ children }) => {
  const initialState = {
    categories: CATEGORIES,
    bookings: BOOKINGS,
  };
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const makeBooking = (item, timeSelected) => {
    const found = state.categories.find(category => category.id == item.id);
    const scheduled = found.schedule.schedules.find(
      element => element.id === timeSelected.id
    );
    const booking = {
      place: item.place,
      price: item.price,
      schedule: { start: timeSelected.start, end: timeSelected.end },
    };
    scheduled.available = false;
    dispatch({
      type: types.MAKE_RESERVATION,
      payload: booking,
    });
  };

  return (
    <bookingState.Provider
      value={{
        categories: state.categories,
        bookings: state.bookings,
        makeBooking,
      }}
    >
      {children}
    </bookingState.Provider>
  );
};

export default BookingState;
