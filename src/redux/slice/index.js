import { createSlice } from '@reduxjs/toolkit';

export const crudSlice = createSlice({
  name: 'careersContent',
  initialState: {
    count: 0,
    next: null,
    previous: null,
    results: [],
    initialLoad: false,
    username: '',
  },
  reducers: {
    setCareers: (state, action) => {
      state.count = action.payload.count;
      state.next = action.payload.next;
      state.previous = action.payload.previous;
      state.results = action.payload.results;

      state.initialLoad = true;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setCareers, setUsername } = crudSlice.actions;
export default crudSlice.reducer;