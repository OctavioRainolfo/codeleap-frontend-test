import { createSlice } from '@reduxjs/toolkit';

export const crudSlice = createSlice({
  name: 'careersContent',
  initialState: {
      count: 0,
      next: null,
      previous: null,
      results: [],
  },
  reducers: {
    setCareers: (state,action) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;
      console.log(state.count);
    },
  },
});

export const { setCareers } = crudSlice.actions;
export default crudSlice.reducer;
