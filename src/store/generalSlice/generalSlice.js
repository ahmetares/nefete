import { createSlice } from '@reduxjs/toolkit'


export const generalSlice = createSlice({
  name: 'general',
  initialState: {
    currentPage:'Home',
    toggleDrawer: false,
    currentBottom:'home',
    backIconVisible:false
    

  },
  reducers: {
    

    setCurrentPage: (state,action) => {
        state.currentPage=action.payload
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








export const { setCurrentPage,setToggleDrawer,setCurrentBottom,toggleDrawerFalse,toggleDrawerTrue,setBackIconVisible} = generalSlice.actions

export default generalSlice.reducer