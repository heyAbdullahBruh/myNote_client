import AddTerr from '@/components/terror/addTerr/addTerr';
import './terror.css';
import { api } from "@/config/api";
import { cookies } from "next/headers";
import Link from "next/link";

const Terror =async () => {
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
    const res=await fetch(`${api}/terrs`,{headers:{'authorization':token},cache:'no-store'});
    const data=await res.json();
    const terrs=data?.terrs;
    // console.log(data.success);
    return (
    <section className="terrs">
        <div className="addTerr">
          <AddTerr token={token}/>
        </div>
        <div className="showTerr">
            <h1>Pie's Friends</h1>
            <section className="allTerrs">
              
                {
                  terrs.map((terr)=>{
                    const {_id,name,mail,photos,terrType}=terr;
                    return (
                      <article key={_id}>
                        <div className='terrType'>
                          <p style={{backgroundColor:terrType}}> </p>
                          <p style={{backgroundColor:terrType}}> </p>
                          <p style={{backgroundColor:terrType}}> </p>
                        </div>
                        <div>
                            <img src={photos[0]?.photo} alt={name} />
                            <h3 style={{backgroundColor:'darkcyan',borderRadius:'.5rem'}}> {name} </h3>
                            <p> {mail} </p>
                        </div>
                        <Link href={`/mrpie/personalinfo/terrors/${_id}`} style={{color:'hotpink'}}> Details </Link>
                      </article>
                    )
                  })
                }

            </section>
        </div>
    </section>
    );
};

export default Terror;