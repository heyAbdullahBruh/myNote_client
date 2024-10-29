'use client';
import { api } from '@/config/api';

const TerrDelete = ({id,token}) => {
    const handleDelete=async(tId)=>{
        await fetch(`${api}/terr/delete/${tId}`,{
            method:'DELETE',
            headers:{'authorization':token}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.href='/mrpie/personalinfo/terrors/';
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

export default TerrDelete;