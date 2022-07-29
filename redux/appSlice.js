import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        show:false,

        reelsOpacity:false
    },
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload
        },
        setReelsOpacity: (state, action) => {
            state.reelsOpacity = action.payload
        }
    }
})

export const { show, setShow, reelsOpacity, setReelsOpacity } = appSlice.actions

export default appSlice.reducer