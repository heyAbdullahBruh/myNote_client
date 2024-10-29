import EditT from '@/components/terror/editTerr/editTerr';
import { api } from '@/config/api';
import { cookies } from 'next/headers';

const EditFrnd = async({params}) => {
    const  {tId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/terr/detail/${tId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data.terr);
    const terr=data.terr;
    return (
        <>
            <EditT terr={terr}  token={token}/>
        </>
    );
};

export default EditFrnd;