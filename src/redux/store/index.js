import { configureStore } from '@reduxjs/toolkit';
import careersContent from '../slice';

export default configureStore({
  reducer: {
    careersContent,
  },
});
