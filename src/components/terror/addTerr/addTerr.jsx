'use client';

import { useState } from "react";
import './addTerr.css';
import { api } from "@/config/api";



const AddTerr = ({token}) => {
    const [showForm,setShowForm]=useState(false);
       
    const [data,setData]=useState({
        name:'',
        mail:'',
        call:'',
        desc:'',
        terrType:''
    });
    const [imageFile,setImageFile]=useState([]);
    const {name,mail,call,desc,terrType}=data;

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
        formData.append('terrType', terrType);
        for(const image of imageFile){
            formData.append('tImgs',image)
        };
        // formData.append('fImgs', imageFile);

    const handleSubmit =async(e)=>{
        e.preventDefault();
            await fetch(`${api}/terr/add`,{
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
        <section className="terrAdd">
            <div className="sFormAct">
                <button onClick={()=>setShowForm(!showForm)}> + Add Terror</button>
            </div>
            {
                showForm&&
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Name Input */}
                    <input type="text" onChange={handleChange} name="name" value={name} placeholder="Terror Name" required/>
                    {/* Mail Input */}
                    <input type="email" onChange={handleChange} name="mail" value={mail} placeholder="Terror Mail" required/>
                    {/* Phone Input */}
                    <input type="text" onChange={handleChange} name="call" value={call} placeholder="Terror Phone" required/>
                    {/* Image Input */}
                    <input required type="file" name='tImgs' onChange={handleImageChange} multiple accept="image/*" style={{cursor:'pointer'}}/>
                    {/* Terror type */}
 
                    <select name="terrType" onChange={handleChange} required>
                        <option>Terror type ..?</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="ren">Red</option>
                    </select>
                    {/* Description Input */}
                    <textarea type="text" onChange={handleChange} value={desc} name="desc" placeholder="Write something your Terror" required></textarea>

                    <button type="submit">Add Terror</button>
                </form>
            }
        </section>
    );
};

export default AddTerr;