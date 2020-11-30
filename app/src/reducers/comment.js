import SCREEN from '../constants/screen'
import searchPagination from '../utilites/searchPagination'
export default function api(state=[],action){

switch(action.type)
{
case 'SHOWLOADER':{
    return{...state,
    isLoading:true
    }
}

case "COMMENT_LIST":{  
    debugger;
    return{
        ...state,
        commentList:action.items
    }
}

case "ITEM_DETAIL_SUCCESS":{
 
}

case "SCREEN_NAME":{
    return {
        ...state,
        selectedScreen:action.items
    }
}

default:
    return{
        ...state
    } 
}

}

