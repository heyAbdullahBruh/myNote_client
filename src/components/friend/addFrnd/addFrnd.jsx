'use client';

import { useState } from "react";
import './addFrnd.css';
import { api } from "@/config/api";



const AddFrnd = ({token}) => {
    const [showForm,setShowForm]=useState(false);
       
    const [data,setData]=useState({
        name:'',
        mail:'',
        call:'',
        desc:''
    });
    const [imageFile,setImageFile]=useState([]);
    const {name,mail,call,desc}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files;
        setImageFile(file);
      };

      const formData = new FormData();
        formData.append('name', name);
        formData.append('mail', mail);
        formData.append('call', call);
        formData.append('desc', desc);
        for(const image of imageFile){
            formData.append('fImgs',image)
        };
        // formData.append('fImgs', imageFile);

    const handleSubmit =async(e)=>{
        e.preventDefault();
            await fetch(`${api}/frnd/add`,{
                method: 'POST',
                headers: {
                    'authorization':token
                },
                body: formData,
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
        // console.log(data,imageFile);
    };

    return (
        <section className="frndAdd">
            <div className="sFormAct">
                <button onClick={()=>setShowForm(!showForm)}> + Add Friend</button>
            </div>
            {
                showForm&&
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Name Input */}
                    <input type="text" onChange={handleChange} name="name" value={name} placeholder="Friend Name" required/>
                    {/* Mail Input */}
                    <input type="email" onChange={handleChange} name="mail" value={mail} placeholder="Friend Mail" required/>
                    {/* Phone Input */}
                    <input type="text" onChange={handleChange} name="call" value={call} placeholder="Friend Phone" required/>
                    {/* Image Input */}
                    <input required type="file" name='fImgs' onChange={handleImageChange} multiple accept="image/*" style={{cursor:'pointer'}}/>
                    {/* Description Input */}
                    <textarea type="text" onChange={handleChange} value={desc} name="desc" placeholder="Write something your friend" required></textarea>

                    <button type="submit">Add Friend</button>
                </form>
            }
        </section>
    );
};

export default AddFrnd;