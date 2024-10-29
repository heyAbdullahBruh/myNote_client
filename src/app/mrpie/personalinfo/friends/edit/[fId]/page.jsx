import EditF from '@/components/friend/editFrnd/editFrnd';
import { api } from '@/config/api';
import { cookies } from 'next/headers';

const EditFrnd = async({params}) => {
    const  {fId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/frnd/detail/${fId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const frnd=data.frnd;
    return (
        <>
            <EditF frnd={frnd}  token={token}/>
        </>
    );
};

export default EditFrnd;