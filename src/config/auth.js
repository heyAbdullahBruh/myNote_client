import { useEffect, useState } from "react";
import { api } from "./api";

export const auth = async ()=>{
    const [isAuth,setIsAuth]=useState();
    useEffect(()=>{
         api.get('/user/auth')
         .then((res)=>{
            if(res.status === 400){
                console.log(res.data.message);
            }
            setIsAuth(res.data.auth);
         }).catch((err)=> console.log(err.message));
    },[]);
    return isAuth;
};