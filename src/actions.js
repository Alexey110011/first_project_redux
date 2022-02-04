import * as constants from './types'

export const add_point = ()=> {
    return {
        type:constants.ADD_POINT
    }
}

export const get_wind = (wind, sys, main, name, clouds)=> {
    return {
        type:constants.GET_WIND, 
        payload:{wind:wind, sys:sys, main:main, name:name, clouds:clouds}
    }
}

export const change_picture = ()=> {
    return {
        type:constants.CHANGE_PICTURE
    }
}

export const show_picture = ()=> {
    return {
        type:constants.SHOW_PICTURE
    }
}

export const show_large_picture = ()=> {
    return {
        type:constants.SHOW_LARGE_PICTUREE
    }
}

export const show_place = ()=> {
    return {
        type:constants.SHOW_PLACE
    }
}

export const show_jour = ()=> {
    return {
        type:constants.SHOW_JOUR
    }
}

export const show_dist = ()=> {
    return {
        type:constants.SHOW_DIST
    }
}








