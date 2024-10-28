import EditN from '@/components/note/EditNote/noteEdit';
import { api } from '@/config/api';
import { cookies } from 'next/headers';

const EditNote = async({params}) => {
    const  {nId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/note/detail/${nId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {noteTitle,noteDesc}=data.note;
    return (
        <>
            <EditN noteTitle={noteTitle} noteDesc={noteDesc} token={token} id={nId}/>
        </>
    );
};

export default EditNote;