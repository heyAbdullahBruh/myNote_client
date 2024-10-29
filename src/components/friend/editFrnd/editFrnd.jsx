'use client';

import { useState } from "react";
import './editFrnd.css';
import { api } from "@/config/api";



const EditF = ({token,frnd}) => {       
    const {_id}=frnd;
    const [data,setData]=useState({
        name:frnd.name,
        mail:frnd.mail,
        call:frnd.call,
        desc:frnd.desc
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

    const handleUpdate =async(fId)=>{
            await fetch(`${api}/frnd/update/${fId}`,{
                method: 'PATCH',
                headers: {
                    'authorization':token
                },
                body: formData,
            }).then((res)=>res.json())
            .then((res)=>{
                if (res.success===true) {
                    alert(res.message);
                    location.href=`/mrpie/personalinfo/friends/${fId}`;
                }else{
                    alert(res.message);
                    location.reload();
                }
            });
        // console.log(data,imageFile);
    };

    return (
        <section className="frndEdit">
                <form onSubmit={(e)=>e.preventDefault()} encType="multipart/form-data">
                    {/* Name Input */}
                    <input type="text" onChange={handleChange} name="name" value={name} placeholder="Friend Name" required/>
                    {/* Mail Input */}
                    <input type="email" onChange={handleChange} name="mail" value={mail} placeholder="Friend Mail" required/>
                    {/* Phone Input */}
                    <input type="text" onChange={handleChange} name="call" value={call} placeholder="Friend Phone" required/>
                    {/* Image Input */}
                    <input type="file" name='fImgs' onChange={handleImageChange} multiple accept="image/*" style={{cursor:'pointer'}}/>
                    {/* Description Input */}
                    <textarea type="text" onChange={handleChange} value={desc} name="desc" placeholder="Write something your friend" required></textarea>

                    <button onClick={()=>handleUpdate(_id)}>Update Friend</button>
                </form>
        </section>
    );
};

export default EditF;