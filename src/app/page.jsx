import About from "@/components/About/About";
import Banner from "@/components/banner/Banner";
import Contact from "@/components/contact/contact";
import Work from "@/components/portfolio/Work";
import Service from "@/components/service/service";
import Link from "next/link";
import  "./page.css";

export default function Home() {
  const date =new Date;
  return (       
  <>
      <header className="navhedar">
         <nav>
            <div className='navlogo'>
                 <h1>Mr.<span>Pie</span></h1>
            </div>
            <div className="navItem">
                 <ul>
                   <li>
                     <Link className="navLink" href={'/'}>Home</Link>
                   </li>
                   <li>
                     <Link className="navLink" href={'#about'}>About</Link>
                   </li>
                   <li>
                     <Link className="navLink" href={'#service'}>Service</Link>
                   </li>
                   <li>
                     <Link className="navLink" href={'#portfolio'}>Portfolio</Link>
                   </li>
                   <li>
                     <Link className="navLink" href={'#contact'}>Contact</Link>
                   </li>
                 </ul>
            </div>
         </nav>
      </header>

      <Banner/><hr />
      <About/><hr />
      <Service/><hr />
      <Work/><hr />
      <Contact/>

      <footer>
                <div className="leftFot">
                      <p> <span style={{fontSize:'1.5rem'}}>&copy;</span>Copyright By Mr.Pie .All right reserve {date.getFullYear()}</p>
                </div>
                <div className="midFot">
                     <Link style={{color:'white',textDecoration:'none'}} href='https://www.facebook.com/Mr.1Pie/'>Facebook</Link><span>|</span>
                     <Link style={{color:'white',textDecoration:'none'}} href='https://x.com/MrPieX'>X</Link><span>|</span>
                     <Link style={{color:'white',textDecoration:'none'}} href='https://www.youtube.com/@Mr.1Pie'>YouTube</Link><span>|</span>
                     <Link style={{color:'white',textDecoration:'none'}} href='https://www.linkedin.com/in/heyAbdullahBro'>LinkedIn</Link>
                </div>
                <div className="rightFot" style={{rotate:'-90deg'}}>
                  <Link href='/' style={{backgroundColor:"green",color:'white',textDecoration:'none',fontSize:'2rem',borderRadius:'50%'}}>{'->'}</Link>
                </div>
        </footer>
  </>
  );
};
