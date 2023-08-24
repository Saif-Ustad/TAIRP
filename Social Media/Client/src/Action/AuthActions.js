import * as AuthAPI from "../API/AuthRequest";

export const logIn = (FormData) => async(dispatch) => {
    
    dispatch({type: "AUTH_START"});
    try{
        const {data} = await AuthAPI.logIn(FormData);
        dispatch({type: "AUTH_SUCCESS", data:data});
    }catch(error){
        console.log(error);
        dispatch({type: "AUTH_FAIL"});
    }

}

export const signUp = (FormData) => async(dispatch) => {
    
    dispatch({type: "AUTH_START"});
    try{
        const {data} = await AuthAPI.signUP(FormData);
        dispatch({type: "AUTH_SUCCESS", data:data});
    }catch(error){
        console.log(error);
        dispatch({type: "AUTH_FAIL"});
    }

}


export const logout = ()=> async(dispatch)=> {
    dispatch({type: "LOG_OUT"})
  }
  