import { configureStore } from '@reduxjs/toolkit';
import setCareers, {crudSlice} from '../slice';

export default configureStore({
  reducer: {
    setCareers,
  },
});
