'use client';

import { useState } from "react";
import './addplan.css';
import { api } from "@/config/api";



const AddPlan = ({token}) => {
    const [showForm,setShowForm]=useState(false);
       
    const [data,setData]=useState({
        title:'',
        description:'',
        status:''
    });
    const {title,description,status}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =async(e)=>{
        e.preventDefault();
            await fetch(`${api}/plan/add`,{
                method: 'POST',
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
                    location.reload();
                }else{
                    alert(res.message);
                    location.reload();
                }
            });
        // console.log(data);
    };

    return (
        <section className="planAdd">
            <div className="sFormAct">
                <button onClick={()=>setShowForm(!showForm)}> + Add plan</button>
                
            </div>
            {
                showForm&&
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} name="title" value={title} placeholder="Plan Title" required/>
                    <textarea type="text" onChange={handleChange} value={description} name="description" placeholder="Add your plan" required></textarea>
                    <select name="status" onChange={handleChange} required>
                        <option>Plan Status ..?</option>
                        <option value="pending">Pending</option>
                        <option value="running">Running</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit">Add Plan</button>
                </form>
            }
        </section>
    );
};

export default AddPlan;