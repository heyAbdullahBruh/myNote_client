'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebookSquare, faGithubSquare, faLinkedin, faRedditSquare, faXTwitter, faYahoo, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { api } from '@/config/api';

const Contact = () => {
    const [data,setData]=useState({
        name:'',
        mail:'',
        message:''

    });
    const [result,setResult]=useState({
        success:null,
        message:''
    });

    const {name,mail,message}=data;

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(data);
         fetch(`${api}/message/add`,{
            cache:"no-store",
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
            
        }).then(res=>res.json())
        .then((res)=>{
            setResult({
                success:res.success,
                message:res.message
            });
            setData({
                name:'',
                mail:'',
                message:''
            });
            if (res.success===true) {
                alert(res.message);
                location.reload();
            }else{
                location.reload();
            }
        });

    };


    return (
        <section className='contact' id='contact'>
            <div className="cntcLeft">
                <div className="cntcHead">
                    <h1>Contact</h1>
                </div>
                <div className="addrsLink">
                    <div className="address">
                        <p><FontAwesomeIcon icon={faYahoo} style={{width:'1.3rem'}}/><Link href={'mailto:abu.sayed121@yahoo.com'} style={{color:'white',textDecoration:'none'}}>abu.sayed121@yahoo.com</Link> </p>
                        <p><FontAwesomeIcon icon={faPhone} style={{width:'1.3rem'}}/> +8801996404083</p>
                    </div>
                    <div className="cntcSocial">
                        <Link className='cntSlink' href={'https://www.facebook.com/Mr.1Pie'} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://x.com/MrPieX'} target="_blank"><FontAwesomeIcon icon={faXTwitter} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://www.youtube.com/@Mr.1Pie'} target="_blank"><FontAwesomeIcon icon={faYoutubeSquare} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://github.com/MrPieee'} target="_blank"><FontAwesomeIcon icon={faGithubSquare} style={{width:'1.5rem'}}/></Link> 

                        <Link className='cntSlink' href={'https://www.linkedin.com/in/heyAbdullahBro'} target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://www.reddit.com/u/MrPieX'} target="_blank"><FontAwesomeIcon icon={faRedditSquare} style={{width:'1.5rem'}}/></Link>

                    </div>
                    <div className="cv">
                        <Link href={'https://pdflink.to/ab846943/'} target='_blank'><button style={{cursor:'pointer'}}>DOWNLOAD CV</button></Link>
                    </div>
                </div>
            </div>
            <div className="cntcRight">
                <form onSubmit={handleSubmit}>
                    <input placeholder='Write your name' value={name} type="text" onChange={handleChange} required name="name" id="name" />
                    <input placeholder='Write your mail' value={mail} type="email" onChange={handleChange} required name="mail" id="mail" />
                    <textarea placeholder='Give me your suggestion' value={message} onChange={handleChange} required name="message" id="message"></textarea>
                    <button type='submit'>SEND</button>
                </form>
                {
                    result.success===true
                    ?<p style={{width:'23rem',fontSize:'1.3rem', padding:'0',margin:"0",color:'green'}}>{result.message}</p>
                    :<p style={{width:'23rem',fontSize:'1.3rem', padding:'0',margin:"0",color:'red'}}>{result.message}</p>
                }
            </div> 
        </section>
    );
};

export default Contact;