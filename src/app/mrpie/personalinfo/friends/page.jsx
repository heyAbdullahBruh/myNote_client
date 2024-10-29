import AddFrnd from "@/components/friend/addFrnd/addFrnd";
import './frnd.css';
import { api } from "@/config/api";
import { cookies } from "next/headers";
import Link from "next/link";

const Frnd =async () => {
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/frnds`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    const frnds=data?.frnd;
    // console.log(data.success);
    return (
    <section className="frnds">
        <div className="addfrnd">
          <AddFrnd token={token}/>
        </div>
        <div className="showfrnd">
            <h1>Pie's Friends</h1>
            <section className="allfrnds">
              
                {
                  frnds.map((frnd)=>{
                    const {_id,name,mail,photos}=frnd;
                    return (
                      <article key={_id}>
                        <div>
                            <img src={photos[0]?.photo} alt="" />
                            <h3 style={{backgroundColor:'darkcyan',borderRadius:'.5rem'}}> {name} </h3>
                            <p> {mail} </p>
                        </div>
                        <Link href={`/mrpie/personalinfo/friends/${_id}`} style={{color:'hotpink'}}> Details </Link>
                      </article>
                    )
                  })
                }

            </section>
        </div>
    </section>
    );
};

export default Frnd;