import EditP from '@/components/plan/EditPlans/planEdit';
import { api } from '@/config/api';
import { cookies } from 'next/headers';

const Editplans = async({params}) => {
    const  {pId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/plan/detail/${pId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {planTitle,planDesc,planStatus}=data.plan;
    return (
        <>
            <EditP planTitle={planTitle} planDesc={planDesc} planStatus={planStatus} token={token} id={pId}/>
        </>
    );
};

export default Editplans;