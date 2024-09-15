import { createSlice } from "@reduxjs/toolkit";

const userNameSlices=createSlice({

    name: "userName",
    initialState: { userName: "Hossam" },

    reducers: {
        changName: (state, action) => {

            state.userName = action.payload

        }
    }

})

export const { changName } = userNameSlices.actions //action

export default userNameSlices.reducer //reducer 