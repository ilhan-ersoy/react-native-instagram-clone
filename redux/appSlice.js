import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        show:false,

        reelsOpacity:false,

        homeOpacity:false
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload
        },
        setReelsOpacity: (state, action) => {
            state.reelsOpacity = action.payload
        },
        setHomeOpacity: (state, action) => {
            state.homeOpacity = action.payload
        }
    }
})

export const { show, setShow, reelsOpacity, setReelsOpacity,setHomeOpacity,homeOpacity } = appSlice.actions

export default appSlice.reducer