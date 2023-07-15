import { createSlice } from '@reduxjs/toolkit'


export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    currentDrawer:'home',
    toggleDrawer: false,
    currentBottom:'home',
    backIconVisible:false

  },
  reducers: {
    

    setCurrentDrawer: (state,action) => {
        state.currentDrawer=action.payload
    },

    setToggleDrawer: (state,action) => {
      state.toggleDrawer=!state.toggleDrawer
    },

    toggleDrawerFalse: (state,action) => {
      state.toggleDrawer=false
    },
    toggleDrawerTrue: (state,action) => {
      state.toggleDrawer=true
    },

    setCurrentBottom: (state,action) => {
      state.currentBottom=action.payload
    },
    setBackIconVisible: (state,action) => {
      state.backIconVisible=action.payload
    }

  }
 
})








export const { setCurrentDrawer,setToggleDrawer,setCurrentBottom,toggleDrawerFalse,toggleDrawerTrue,setBackIconVisible} = generalSlice.actions

export default generalSlice.reducer