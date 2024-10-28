import { api } from "@/config/api";
import { cookies } from "next/headers";
import './notes.css';
import Link from "next/link";
import AddNote from "@/components/note/AddNote/AddNote";
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
          <AddNote token={token}/>
        </div>
        <div className="showNote">
            <h1>Mr.Pie Notes</h1>
            <section className="allNotes">
              
                {
                  notes?.map((note)=>{
                    const {_id,noteTitle}=note;
                    return (
                      <article key={_id} className="note">
                        <h3> {noteTitle.slice(0,50)}</h3>
                        <Link href={`/mrpie/personalinfo/notes/${_id}`} style={{color:'hotpink'}}> Show </Link>
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
