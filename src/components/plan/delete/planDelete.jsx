'use client';
import { api } from '@/config/api';

const PlanDelete = ({id,token}) => {
    const handleDelete=async(pId)=>{
        await fetch(`${api}/plan/delete/${pId}`,{
            method:'DELETE',
            headers:{'authorization':token}
        })
        .then((res)=>res.json())
        .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.href='/mrpie/personalinfo/plans/';
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

export default PlanDelete;