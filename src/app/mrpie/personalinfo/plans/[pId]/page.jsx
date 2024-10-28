import { api } from '@/config/api';
import { cookies } from 'next/headers';
import Link from 'next/link';
import styles from './single.module.css'
import PlanDelete from '@/components/plan/delete/planDelete';

const Singleplan = async({params}) => {
    const  {pId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/plan/detail/${pId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);
    const {planTitle,planDesc,planStatus}=data.plan;
    return (
        <section className={styles.singleplan}>
            <div className={styles.splanSec}>
                <h5>Plan Status : {planStatus}</h5>
                <h1>{planTitle}</h1>
                <p>{planDesc}</p>
                <div>
                    
                    <Link href={`/mrpie/personalinfo/plans/edit/${pId}`}><button style={{cursor:'pointer'}}>Edit</button></Link>
                    <PlanDelete id={pId} token={token}/>
                </div>
            </div>
        </section>
    );
};

export default Singleplan;