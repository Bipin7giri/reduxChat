import { configureStore } from '@reduxjs/toolkit';
import { loaderSlice } from './slice/loaderSlice';
import { messageSlice } from './slice/messageSlice';
const store = configureStore({
  reducer: {
    message: messageSlice.reducer,
    loader: loaderSlice.reducer,
  },
});
export default store;
