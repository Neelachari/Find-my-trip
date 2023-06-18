import { LOGINSUCCESS,LOGINLOADING, LOGINSFAILURE } from "./actionType";

interface initialValueType {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

const initialValue:initialValueType ={
    isLoading:false,
    isError:false,
    isSuccess:false,
}

export const reducer =(state=initialValue,{type,payload}:{type:string,payload:any})=>{
    
    switch(type){
        case LOGINSUCCESS:{
            return {
                ...state,
                isSuccess:true
            }
        }
        case LOGINLOADING:{
            return {
                ...state,
                isSuccess:false,
                isLoading:true
            }
        }
        case LOGINSFAILURE:{
            return {
                ...state,
                isSuccess:false,
                isError:true
            }
        }
        default:{
            return state
        }
    }

}