'use client';
import { useState } from 'react';
import './about.css';
const About = () => {
    const [skill,setSkill]= useState(true);
    const [edu,setEdu]= useState(false);
    const [exp,setExp]= useState(false);

    const handleSkill=()=>{
        setSkill(true);
        setEdu(false);
        setExp(false);
    };
    const handleEdu=()=>{
        setSkill(false);
        setEdu(true);
        setExp(false);
    };
    const handleExp=()=>{
        setSkill(false);
        setEdu(false);
        setExp(true);
    };

    return (
        <section className="aboutSec" id='about'>
          <div className="abImg">
            <img src="https://i.postimg.cc/J0RRXYTP/Myprofile2.jpg" alt="myImg2" />
          </div>

          <div className="abDesc">
             <div className="descUp">
                <h1>About Me.</h1>
                <p>Iam Mr.Pie work on MERN stack web development . I expert in JAVASCRIPT , REACT.JS , NODE.JS , EXPRESS.JS & MONGODB databse management system . I experienced last Three yers on thoose skills.   </p>
             </div>
             <div className="descDown">
                <div className="dscHead">
                    <button onClick={handleSkill} style={skill?{borderBottom:'3px solid orange'}:{borderBottom:'none'}}>Skills</button>
                    <button onClick={handleEdu} style={edu?{borderBottom:'3px solid orange'}:{borderBottom:'none'}}>Education</button>
                    <button onClick={handleExp} style={exp?{borderBottom:'3px solid orange'}:{borderBottom:'none'}}>Experience</button>
                </div>

                <div className="skill" style={skill?{display:'block'}:{display:'none'}}>
                    <h3 className='abDsch3'>Skill</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>REACT</li>
                        <li>NEXT.JS</li>
                        <li>NODE</li>
                        <li>EXPRESS</li>
                        <li>MONGODB</li>
                        <li>Cloudinary</li>
                    </ul>
                </div>

                <div className="edu" style={edu?{display:'block'}:{display:'none'}}>
                    <h3 className='abDsch3'>Education</h3>
                    <div className="ssc">
                        <h2 style={{color:'yellowgreen'}}>SSC</h2>
                        <h4>2020-2021</h4>
                        <h4>Kutumbapr High School</h4>
                    </div>
                    <div className="hsc" >
                        <h2 style={{color:'yellowgreen'}}>HSC</h2>
                        <h4>2022-2023</h4>
                        <h4>Ser-E-Bangla Nagar GOVT. Boys College</h4>
                    </div>
                </div>

                <div className="exp" style={exp?{display:'block'}:{display:'none'}}>
                    <h3 className='abDsch3'>Experience</h3>
                   <div className="exps">
                     <h4>2021-2022</h4>
                     <h3>FIVERR.com</h3>
                   </div>
                   <div className="exps">
                     <h4>2022-2023</h4>
                     <h3>PieTech LLC.</h3>
                   </div>
                   <div className="exps">
                     <h4>2023-running</h4>
                     <h3>DREAMERS</h3>
                     <h3>PieTech LLC.</h3>
                     </div>
                </div>
             </div>
          </div>  
        </section>
    );
};

export default About;