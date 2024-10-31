import Link from "next/link";
import './layout.css'
import { cookies } from "next/headers";
import LogOut from "@/components/logOut/LogOut";
export default async function Mrpie({ children }) {
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
  // cookieStore.
  return (
    <>
        <header className="Mnavhedar">
         <nav>
            <div className='Mnavlogo'>
                 <h1>Mr.<span>Pie</span></h1>
            </div>
            <div className="MnavItem">
                 <ul>
                   <li>
                     <Link className="MnavLink" href={'/mrpie/personalinfo/notes'}>Notes</Link>
                   </li>
                   <li>
                     <Link className="MnavLink" href={'/mrpie/personalinfo/plans'}>Plans</Link>
                   </li>
                   <li>
                     <Link className="MnavLink" href={'/mrpie/personalinfo/friends'}>Frineds</Link>
                   </li>
                   <li>
                     <Link className="MnavLink" href={'/mrpie/personalinfo/terrors'}>Terrors</Link>
                   </li>
                   <li>
                     <Link className="MnavLink" href={'/mrpie/personalinfo/messages'}>Message</Link>
                   </li>
                   {/* <li></li> */}
                 </ul>
            </div>
         </nav>
      </header>

      <main>
              {children}
      </main>
      <footer>
          <p> <span style={{fontSize:'1.5rem'}}>&copy;</span>Copyright By Mr.Pie .All right reserve 2024</p>
          <LogOut token={token}/>
      </footer>
    </>
  );
}
