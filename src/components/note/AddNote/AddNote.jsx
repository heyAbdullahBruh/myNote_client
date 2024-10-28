'use client';

import { useState } from "react";
import './addnote.css';
import { api } from "@/config/api";



const AddNote = ({token}) => {
    const [showForm,setShowForm]=useState(false);
       
    const [data,setData]=useState({
        title:'',
        description:'',
    });
    const {title,description}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =async(e)=>{
        e.preventDefault();
            await fetch(`${api}/note/add`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization':token
                },
                body: JSON.stringify({
                    title,
                    description
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

    };

    return (
        <section className="noteAdd">
            <div className="sFormAct">
                <button onClick={()=>setShowForm(!showForm)}> + Add note</button>
            </div>
            {
                showForm&&
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} name="title" value={title} placeholder="Note Title" />
                    <textarea type="text" onChange={handleChange} value={description} name="description" placeholder="Add your notes" ></textarea>
                    <button type="submit">Add Note</button>
                </form>
            }
        </section>
    );
};

export default AddNote;