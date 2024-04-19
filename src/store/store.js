import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../reduxSlice/formSlice';

export default configureStore({
  reducer: {
    form: formReducer,
  },
});