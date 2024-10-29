'use client';
import { api } from '@/config/api';

const FrndDelete = ({id,token}) => {
    const handleDelete=async(pId)=>{
        await fetch(`${api}/frnd/delete/${pId}`,{
            method:'DELETE',
            headers:{'authorization':token}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.href='/mrpie/personalinfo/friends/';
            } else {
                alert(res.message);
                location.reload();
            }
        });
    };
    return (
        <>
            <button onClick={()=>handleDelete(id)} style={{cursor:'pointer'}}>Delete</button>
        </>
    );
};

export default FrndDelete;