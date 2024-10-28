'use client';
import { api } from '@/config/api';

const NoteDelete = ({id,token}) => {
    const handleDelete=async(nId)=>{
        await fetch(`${api}/note/delete/${nId}`,{
            method:'DELETE',
            headers:{'authorization':token}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.href='/mrpie/personalinfo/notes/';
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

export default NoteDelete;