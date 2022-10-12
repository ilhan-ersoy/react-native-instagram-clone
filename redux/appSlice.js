import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        show: false,

        reelsOpacity: false,

        homeOpacity: false,

        hideTabBar: false
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
        },
        setHideTabBar: (state, action) => {
            state.hideTabBar = action.payload
        }
    }
})

export const { show, setShow, reelsOpacity, setReelsOpacity, setHomeOpacity, homeOpacity, hideTabBar, setHideTabBar } = appSlice.actions

export default appSlice.reducer