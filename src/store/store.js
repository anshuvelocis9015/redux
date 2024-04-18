import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reduxSlice/CounterSclice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});