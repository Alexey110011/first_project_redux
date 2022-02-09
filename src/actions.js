import * as constants from './types'

export const add_point = ()=> {
    return {
        type:constants.ADD_POINT
    }
}

export const get_wind = (wind, sys, name, clouds, temp)=> {
    return {
        type:constants.GET_WIND, 
        wind,
        sys, 
        name,
        clouds,
        temp
    }
}

export const show_picture = (sys,name, clouds, days)=> {
    return {
        type:constants.SHOW_PICTURE,
        sys,
        name,
        clouds,
        days
    }
}

export const show_clouds = ()=> {
    return {
        type:constants.SHOW_CLOUDS,
        cloudness:true
    }
}

export const hide_clouds = ()=> {
    return {
        type:constants.HIDE_CLOUDS,
        cloudness:false
    }
}

export const show_dist = (dist)=> {
    return {
        type:constants.SHOW_DIST,
        dist
    }
}








