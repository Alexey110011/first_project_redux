import * as types from './types'


const initialState = {
            wind:{
            speed:null,
            deg:null,
            gust:null,
            },
        clouds:{
            all:null
        },
        sys:{
            country:null
        },
        name:null,
        temp:null,
        days:[],
        jour:null,
        dist:null,
        cloudness:false
}
const reducer = (state=initialState, action)=> {
    switch (action.type) {
        case types.ADD_POINT:
            return{...state,point1:state.point1+50}
        case types.GET_WIND:
            return{...state,wind:action.wind,sys:action.sys, name:action.name, clouds:action.clouds, temp:action.temp};
        case types.SHOW_PICTURE:
            return{...state,clouds:action.clouds, sys:action.sys, name:action.name, days:action.days};
        case types.HIDE_CLOUDS:
            return{...state,cloudness:action.cloudness};
        case types.SHOW_CLOUDS:
            return{...state,cloudness:action.cloudness}; 
        case types.SHOW_DIST:
            return{...state,dist:action.dist};
        default:
            return state;
        }
    }
export default reducer