import { api } from '@/config/api';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from './single.module.css'
import TerrDelete from '@/components/terror/terrDelete/deleteTerr';

const SingleTerr = async({params}) => {
    const  {tId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/terr/detail/${tId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {name,mail,call,desc,photos,terrType}=data.terr;
    return (
        <section className={styles.singleTerr}>
            <div className={styles.sTerrSec}>
                <div className={styles.terrType}>
                   <p style={{backgroundColor:terrType}}> </p>
                   <p style={{backgroundColor:terrType}}> </p>
                   <p style={{backgroundColor:terrType}}> </p>
                 </div>
                <div className={styles.TerrInfo}>
                    <h3>Name : {name}</h3>
                    <h4>Mail : {mail}</h4>
                    <p>Phone : {call}</p>
                    <p>{desc}</p>
                </div>
                <div>
                    
                    <Link href={`/mrpie/personalinfo/terrors/edit/${tId}`}><button style={{cursor:'pointer'}}>Edit</button></Link>
                    <TerrDelete id={tId} token={token}/>
                </div>
            </div>
            <div className={styles.TerrPhoto}>

                {
                    photos?.map((img)=><img src={img.photo} alt={img.imgId}/>)
                }

            </div>
        </section>
    );
};

export default SingleTerr;