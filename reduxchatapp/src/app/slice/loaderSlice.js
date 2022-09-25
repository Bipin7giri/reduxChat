import { createSlice } from '@reduxjs/toolkit';

const initialLoaderState = {
  status: false,
  userName: '',
};
const loaderSlice = createSlice({
  name: 'message',
  initialState: initialLoaderState,
  reducers: {
    setLoader(state, actions) {
      state.status = true;
      state.userName = actions.payload;
    },
  },
});
export { loaderSlice };
export const loaderAction = loaderSlice.actions;
