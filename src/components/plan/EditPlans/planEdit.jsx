'use client';

import { useState } from "react";
import './editplan.css';
import { api } from "@/config/api";
import Link from "next/link";


const EditP = ({planTitle,planStatus,planDesc,token,id}) => {
       
    const [data,setData]=useState({
        title:planTitle,
        description:planDesc,
        status:planStatus
    });
    const {title,description,status}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleUpdate =async(pId)=>{
            await fetch(`${api}/plan/update/${pId}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':token
                },
                body: JSON.stringify({
                    title,
                    description,
                    status
                }),
            }).then((res)=>res.json())
            .then((res)=>{
                if (res.success===true) {
                    alert(res.message);
                    location.href=`/mrpie/personalinfo/plans/${pId}`;
                }else{
                    alert(res.message);
                    location.reload();
                }
            });
            // console.log(data ,pId);

    };

    return (
        <section className="planEdit" style={{margin:'2rem'}}>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" onChange={handleChange} name="title" value={title} placeholder="plan Title" />
                    <textarea type="text" onChange={handleChange} value={description} name="description" placeholder="Add your plans" ></textarea>
                    <select name="status" onChange={handleChange} value={status} required>
                        <option>Plan Status ..?</option>
                        <option value="pending">Pending</option>
                        <option value="running">Running</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button onClick={()=>handleUpdate(id)}>Update plan</button>
                    <Link href={`/mrpie/personalinfo/plans/${id}`}><button>Back</button></Link>
                </form>
        </section>
    );
};

export default EditP;