import { GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, PATCH_DATA_FAILURE, PATCH_DATA_REQUIEST, PATCH_DATA_SUCCESS, POST_CART_FAILURE, POST_CART_REQUIEST, POST_CART_SUCCESS } from "./action"



const initState={
    isLoading:false,
    isError:false,
    data:[],
    patchData:[],
    postCart:[],
    getCart:[]

}

export const dataReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case PATCH_DATA_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case PATCH_DATA_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    patchData:action.payload
                })
                case PATCH_DATA_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case POST_CART_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case POST_CART_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    postCart:action.payload
                })
                case POST_CART_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    case GET_CART_REQUIEST:
            return({
                ...state,
                isError:false,
                isLoading:true
            })
            case GET_CART_SUCCESS:
                return({
                    ...state,
                    isError:false,
                    isLoading:false,
                    getCart:action.payload
                })
                case GET_CART_FAILURE:
                    return({
                        ...state,
                        isError:true,
                        isLoading:false
                    })


                    default:
                        return({
                            ...state
                        })
    }
}