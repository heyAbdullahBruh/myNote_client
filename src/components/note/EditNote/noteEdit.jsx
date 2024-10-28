'use client';

import { useState } from "react";
import './editnote.css';
import { api } from "@/config/api";
import Link from "next/link";


const EditN = ({noteTitle,noteDesc,token,id}) => {
       
    const [data,setData]=useState({
        title:noteTitle,
        description:noteDesc,
    });
    const {title,description}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleUpdate =async(nId)=>{
            await fetch(`${api}/note/update/${nId}`,{
                method: 'PATCH',
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
                    location.href=`/mrpie/personalinfo/notes/${nId}`;
                }else{
                    alert(res.message);
                    location.reload();
                }
            });
            // console.log(token,nId);

    };

    return (
        <section className="noteAdd" style={{margin:'2rem'}}>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <input type="text" onChange={handleChange} name="title" value={title} placeholder="Note Title" />
                    <textarea type="text" onChange={handleChange} value={description} name="description" placeholder="Add your notes" ></textarea>
                    <button onClick={()=>handleUpdate(id)}>Update Note</button>
                    <Link href={`/mrpie/personalinfo/notes/${id}`}><button>Back</button></Link>
                </form>
        </section>
    );
};

export default EditN;