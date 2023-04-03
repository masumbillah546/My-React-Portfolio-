import { createSlice } from '@reduxjs/toolkit'

const isDark = JSON.parse(localStorage.getItem('theme')) ?? true
const initialState = {
  isDark,
}

export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isDark = !state.isDark
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleTheme } = counterSlice.actions

export default counterSlice.reducer
