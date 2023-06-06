import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  initialLoad: false,
  username: '',
  notification: {
    message: '',
    icon: '',
    showNotification: false,
  },
};

export const crudSlice = createSlice({
  name: 'careersContent',
  initialState,
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
    setLogout: (state) => {
      state.count = 0;
      state.next = null;
      state.previous = null;
      state.results = [];
      state.initialLoad = false;
      state.username = '';
    },

    showMessage: (state, action) => {
      state.notification.message = action.payload.text;
      state.notification.icon = action.payload.icon;
      state.notification.showNotification = true;
    },
    hideMessage: (state) => {
      state.notification.message = '';
      state.notification.icon = '';
      state.notification.showNotification = false;
    },
  },
});

export const { setCareers, setUsername, setLogout, showMessage, hideMessage } =
  crudSlice.actions;
export default crudSlice.reducer;
