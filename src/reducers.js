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
        dist1:null,
        cloudness:false
}
const reducer = (state=initialState, action)=> {
    switch (action.type) {
        case types.ADD_POINT:
            return{...state,point1:state.point1+50}
        case types.GET_WIND:
            return{...state,wind:action.payload.wind,sys:action.payload.sys, name:action.payload.name, clouds:action.payload.clouds, temp:action.payload.temp};
        case types.SHOW_PICTURE:
            return{...state,clouds:action.payload.clouds, sys:action.payload.sys, name:action.payload.name, days:action.payload.days};
        case types.HIDE_CLOUDS:
            return{...state,cloudness:action.payload.cloudness};
        case types.SHOW_CLOUDS:
            return{...state,cloudness:action.payload.cloudness}; 
        case types.SHOW_DIST:
            return{...state,dist1:action.payload.dist1};
        default:
            return state;
        }
    }
export default reducer