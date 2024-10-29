import { api } from "@/config/api";
import { cookies } from "next/headers";
import './message.css';
import Link from "next/link";
// import styles from './message.module.css';

const Message = async() => {
  const cookieStore=await cookies();
  const token = cookieStore.get('token')?.value;
  const res=await fetch(`${api}/messages`,{headers:{'authorization':token},cache:'no-store'});
  const data=await res.json();
  const messages=data.msgs;
  // console.log(message);
  
  return (
    <section className="message">
        <div className="showMsg">
            <h1>Public Messages</h1>
            <section className="allmessage">
              
                {
                  messages?.map((msg)=>{
                    const {_id,name,mail}=msg;
                    return (
                      <article key={_id} className="Msg">
                        <div>
                            <h3>{name}</h3>
                            <p>{mail}</p>
                        </div>
                        <Link href={`/mrpie/personalinfo/messages/${_id}`} style={{color:'yellow'}}> Show </Link>
                      </article>
                    )
                  })
                }

            </section>
        </div>
    </section>
  );
};

export default Message;  // Protecting the message component
