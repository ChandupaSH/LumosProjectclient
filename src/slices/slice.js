import { createSlice } from '@reduxjs/toolkit';

const iState = {
    sideMenuOff: true,
    sideMenuArrowHover: [],
    shownProducts: []
}

const allDataSlice = createSlice({
    name: 'allData',
    initialState: iState ,
    reducers:{
        sideMenuChange: (state) => {
            state.sideMenuOff ? state.sideMenuOff = false :  state.sideMenuOff = true
        },
        sideMenuArrowHover: (state , action) => {
            state.sideMenuArrowHover = []
            state.sideMenuArrowHover.push(action.payload)
        }
    }
})

export const sideMenuArrowHoverSelector = (state) => state.allData.sideMenuArrowHover
export const sideMenuSelector = (state) => state.allData.sideMenuOff
export const {sideMenuChange, sideMenuArrowHover} = allDataSlice.actions
export default allDataSlice.reducer















