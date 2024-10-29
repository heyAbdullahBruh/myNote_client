import { api } from '@/config/api';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from './single.module.css'
import FrndDelete from '@/components/friend/frndDelete/deleteFrnd';

const SingleFrnd = async({params}) => {
    const  {fId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/frnd/detail/${fId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {name,mail,call,desc,photos}=data.frnd;
    return (
        <section className={styles.singleFrnd}>
            <div className={styles.sFrndSec}>
                <div className={styles.frndInfo}>
                    <h3>Name : {name}</h3>
                    <h4>Mail : {mail}</h4>
                    <p>Phone : {call}</p>
                    <p>{desc}</p>
                </div>
                <div>
                    
                    <Link href={`/mrpie/personalinfo/friends/edit/${fId}`}><button style={{cursor:'pointer'}}>Edit</button></Link>
                    <FrndDelete id={fId} token={token}/>
                </div>
            </div>
            <div className={styles.frndPhoto}>

                {
                    photos?.map((img)=><img src={img.photo} alt={img.imgId}/>)
                }

            </div>
        </section>
    );
};

export default SingleFrnd;