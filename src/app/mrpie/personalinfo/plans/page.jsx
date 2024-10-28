import { api } from "@/config/api";
import { cookies } from "next/headers";
import './plans.css';
import Link from "next/link";
import AddPlan from "@/components/plan/AddPlans/Addplan";
// import styles from './plans.module.css';

const Plans = async() => {
  const cookieStore=await cookies();
  const token = cookieStore.get('token')?.value;
  const res=await fetch(`${api}/plans`,{headers:{'authorization':token},cache:'no-store'});
  const data=await res.json();
  const plans=data.plans;
  // console.log(plans);
  
  return (
    <section className="plans">
        <div className="addplan">
          <AddPlan token={token}/>
        </div>
        <div className="showplan">
            <h1>Mr.Pie plans</h1>
            <section className="allplans">
              
                {
                  plans?.map((plan)=>{
                    const {_id,planTitle,planStatus}=plan;
                    return (
                      <article key={_id} className="plan" style={planStatus==='pending'?{backgroundColor:'greenyellow'}:planStatus==='running'? {backgroundColor:'lightseagreen'}:{backgroundColor:'rgb(10, 224, 10)'}}>
                        <h3> {planTitle.slice(0,50)}</h3>
                        <Link href={`/mrpie/personalinfo/plans/${_id}`} style={{color:'hotpink'}}> Show </Link>
                      </article>
                    )
                  })
                }

            </section>
        </div>
    </section>
  );
};

export default Plans;  // Protecting the Plans component
