import NoteDelete from '@/components/note/delete/noteDelete';
import { api } from '@/config/api';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from './single.module.css'

const SingleNote = async({params}) => {
    const  {nId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/note/detail/${nId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {noteTitle,noteDesc}=data.note;
    return (
        <section className={styles.singleNote}>
            <div className={styles.sNoteSec}>
                <h1>{noteTitle}</h1>
                <p>{noteDesc}</p>
                <div>
                    
                    <Link href={`/mrpie/personalinfo/notes/edit/${nId}`}><button style={{cursor:'pointer'}}>Edit</button></Link>
                    <NoteDelete id={nId} token={token}/>
                </div>
            </div>
        </section>
    );
};

export default SingleNote;