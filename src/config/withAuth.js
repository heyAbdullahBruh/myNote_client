'use client';

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { auth } from "./auth";

export const withAuth=(Component)=>{
    return function WithAuth(prop) {
        const isAuth =auth();
        useEffect(()=>{
            if (isAuth===false) {
                redirect('/mrpie/auth/login');
            }
        },[isAuth]);
        if (isAuth===false) {
            return null;
        }
        return <Component {...prop}/>
    };
};


