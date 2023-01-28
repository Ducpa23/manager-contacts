const createSlice = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
  },
});

export const { authLogin } = authSlice.actions;
export default authSlice.reducer;
