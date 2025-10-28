import  crud  from "@/reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
export let store = configureStore({
  reducer: {
    crud: crud
  }  
})