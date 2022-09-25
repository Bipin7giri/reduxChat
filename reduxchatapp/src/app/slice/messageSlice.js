import { createSlice } from '@reduxjs/toolkit';

const initialMessageState = {
  message: localStorage.getItem('message'),
};
const messageSlice = createSlice({
  name: 'message',
  initialState: initialMessageState,
  reducers: {
    // updateNewsFeed(state) {
    //   state.initialPost = true;
    // },
    saveMessage(state, actions) {
      state.message = actions.payload;
      localStorage.setItem('message', JSON.stringify(state.message));
    },
  },
});
export { messageSlice };
export const messageAction = messageSlice.actions;
