import {serviceCallCustom} from '../network'

export function addComment(comment) {
    return (dispatch) => {
        serviceCallCustom('post',{"comment":comment})
       .then((response) => {
        console.log('>>>>response',response)

        if (response && response.data){
            console.log('>>>>response',response)
            dispatch(getComments())
        } else {
        }
        })
    };
}

export function deleteCommemt(commentId) {
    return (dispatch) => {
        serviceCallCustom('delete',{"commentId":commentId})
       .then((response) => {
        if (response && response.data){
            console.log('>>>>response',response)
            dispatch(getComments())
        } else {
            // dispatch(returnAction("SEARCH_RESPONSE",{})) 
        }
        })
    };
}

export function updateComment(commentId,comment) {
    return (dispatch) => {
        serviceCallCustom('put',{"commentId":commentId,"comment":comment})
       .then((response) => {
        if (response && response.data){
            dispatch(getComments())
        } else {
        }
        })
    };
}

export function getComments() {
    return (dispatch) => {
        serviceCallCustom('get',null)
       .then((response) => {

        if (response && response.data){
            dispatch(returnPayload("COMMENT_LIST",response.data.responseData))
        } else {
            dispatch(returnPayload("COMMENT_LIST",null)) 
        }
        })
    };
}

function returnPayload(type,items) {
    return {
        type: type,
        items
    };
  }