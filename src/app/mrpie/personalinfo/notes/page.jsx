import { api } from "@/config/api";
import { cookies } from "next/headers";
import './notes.css';
// import styles from './notes.module.css';

const Frnd = async() => {
  const cookieStore=await cookies();
  const token = cookieStore.get('token')?.value;
  const res=await fetch(`${api}/notes`,{headers:{'authorization':token},cache:'no-store'});
  const data=await res.json();
  const notes=data.notes;
  // console.log(notes);
  
  return (
    <section className="notes">
        <div className="addNote">
          <button> + Add note</button>
        </div>
        <div className="showNote">
            <h1>Mr.Pie Notes</h1>
            <section className="allNotes">
              
                {
                  notes?.map((note)=>{
                    const {_id,noteTitle}=note;
                    return (
                      <article key={_id} className="note">
                        <h3> {noteTitle}</h3>
                        <button>D</button>
                      </article>
                    )
                  })
                }

            </section>
        </div>
    </section>
  );
};

export default Frnd;  // Protecting the Frnd component
