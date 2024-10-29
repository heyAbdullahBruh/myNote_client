'use client';
import { api } from '@/config/api';

const MsgDelete = ({id,token}) => {
    const handleDelete=async(mId)=>{
        await fetch(`${api}/message/delete/${mId}`,{
            method:'DELETE',
            headers:{'authorization':token}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.href='/mrpie/personalinfo/messages/';
            } else {
                alert(res.message);
                location.reload();
            }
        });
        // console.log(mId,token);
    };
    return (
        <>
            <button onClick={()=>handleDelete(id)} style={{cursor:'pointer',borderRadius:'5rem',border:'1px solid black'}}>Delete</button>
        </>
    );
};

export default MsgDelete;