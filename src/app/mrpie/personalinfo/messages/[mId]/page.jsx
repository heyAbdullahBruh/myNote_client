import { api } from '@/config/api';
import { cookies } from 'next/headers';
import styles from './single.module.css'
import MsgDelete from '@/components/message/msgDelete/msgDelete';

const SingleMsg = async({params}) => {
    const  {mId}=await params;
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/message/detail/${mId}`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    // console.log(data);   
     const {name,mail,message}=data?.message;

    return (
        <section className={styles.singleMsg}>
            {
                data.message?
                <div className={styles.sMessageSec}>
                    <h3>Name : {name}</h3>
                    <h4>Mail : {mail}</h4>
                    <p>Message : {message}</p>
                    <div> 
                        <MsgDelete id={mId} token={token}/>
                    </div>
                </div>:
                <><h1>Not Found This message</h1></>
            }
        </section>
    );
};

export default SingleMsg;