'use client';

import { useState } from "react";
import './editTerr.css';
import { api } from "@/config/api";



const EditT = ({token,terr}) => {       
    const {_id}=terr;
    const [data,setData]=useState({
        name:terr.name,
        mail:terr.mail,
        call:terr.call,
        desc:terr.desc,
        terrType:terr.terrType
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
        for(const image of imageFile){
            formData.append('tImgs',image)
        };
        // formData.append('fImgs', imageFile);

    const handleUpdate =async(tId)=>{
            await fetch(`${api}/terr/update/${tId}`,{
                method: 'PATCH',
                headers: {
                    'authorization':token
                },
                body: formData,
            }).then((res)=>res.json())
            .then((res)=>{
                if (res.success===true) {
                    alert(res.message);
                    location.href=`/mrpie/personalinfo/terrors/${tId}`;
                }else{
                    alert(res.message);
                    location.reload();
                }
            });
        // console.log(data,imageFile);
    };

    return (
        <section className="terrEdit">
                <form onSubmit={(e)=>e.preventDefault()} encType="multipart/form-data">
                    {/* Name Input */}
                    <input type="text" onChange={handleChange} name="name" value={name} placeholder="Terror Name" required/>
                    {/* Mail Input */}
                    <input type="email" onChange={handleChange} name="mail" value={mail} placeholder="Terror Mail" required/>
                    {/* Phone Input */}
                    <input type="text" onChange={handleChange} name="call" value={call} placeholder="Terror Phone" required/>
                    {/* Image Input */}
                    <input type="file" name='tImgs' onChange={handleImageChange} multiple accept="image/*" style={{cursor:'pointer'}}/>
                    {/* Terror type */}
 
                    <select name="terrType" onChange={handleChange} value={terrType} required>
                        <option>Terror type ..?</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="orange">Orange</option>
                        <option value="ren">Red</option>
                    </select>
                    {/* Description Input */}
                    <textarea type="text" onChange={handleChange} value={desc} name="desc" placeholder="Write something your friend" required></textarea>

                    <button onClick={()=>handleUpdate(_id)}>Update Terror</button>
                </form>
        </section>
    );
};

export default EditT;