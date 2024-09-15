import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name:'language',
  initialState:{language:"en"},
  reducers:{
    changeLanguage:(state,action)=>{
      state.language=action.payload
    },

  }
})

export const {changeLanguage}=languageSlice.actions //actions

export default languageSlice.reducer //reducer