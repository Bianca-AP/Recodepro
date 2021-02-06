import {FC_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = { 

    newValue: '' 
  
  }; 
  
  export const fcReducer = (state = initialState, action) => { 
  
    switch (action.type) { 
  
      case FC_UPDATE_VALUE: 
  
        return { 
  
          ...state, 
  
          newValue: action.newValue 
  
        }; 
  
      default: 
  
        return state; 
  
    } 
  
  }; 
  