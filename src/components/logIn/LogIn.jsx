'use client';
import style from './login.module.css';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { api } from '@/config/api';

const LogIn = ({token}) => {
    const router=useRouter();

    if (token) {
        router.replace('/mrpie/personalinfo');
    } else {
                
            const [data,setData]=useState({
                username:'',
                password:'',
            });
            const {username,password}=data;

            const handleChange = (e) => {
                setData({
                    ...data,
                    [e.target.name]:e.target.value
                });
            };
            const handleSubmit =async(e)=>{
                e.preventDefault();
                    await fetch(`${api}/user/logIn`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        credentials: 'include', // Include cookies and credentials
                        body: JSON.stringify({
                            username,
                            password
                        }),
                    })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(`HTTP error! Status: ${res.status}`);
                        }
                        return res.json();
                    })
                    .then((res) => {
                        if (res.success === true) {
                            alert(res.message);
                            router.replace('/mrpie/personalinfo');
                        } else {
                            alert(res.message);
                            location.reload();
                        }
                    })
                    .catch((error) => {
                        console.error("Fetch error:", error);
                        alert("An error occurred. Check console for details.");
                    });
                    

            };



            return (
                <section>
                
                <div className={style.logIn}>
                        <h1 style={{fontSize:'2.5rem',margin:'2rem'}}>LogIn</h1>
                        <form onSubmit={handleSubmit}>
                            <input placeholder='Username' value={username} type="text" onChange={handleChange} required name="username" />
                            <input placeholder='Write your mail' value={password} type="password" onChange={handleChange} required name="password" />
                            <button type='submit'>LogIn</button>
                        </form>
                    </div> 
                </section>
            );

    };


};

export default LogIn;