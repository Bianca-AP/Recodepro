import { CLICK_UPDATE_VALUE } from './actionTypes';
import { FC_UPDATE_VALUE } from './actionTypes';

export const clickButton = value => ({ 
    type: CLICK_UPDATE_VALUE, 
    newValue: value 
}); 

export const fcButton = value => ({ 
    type: FC_UPDATE_VALUE, 
    newValue: value 
}); 