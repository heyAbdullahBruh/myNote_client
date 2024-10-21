import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { faFacebookSquare, faLinkedin, faXTwitter, faYahoo, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className="cntcLeft">
                <div className="cntcHead">
                    <h1>Contact</h1>
                </div>
                <div className="addrsLink">
                    <div className="address">
                        <p><FontAwesomeIcon icon={faYahoo} style={{width:'1.3rem'}}/> abu.sayed121@yahoo.com</p>
                        <p><FontAwesomeIcon icon={faPhone} style={{width:'1.3rem'}}/> +8801996404083</p>
                    </div>
                    <div className="cntcSocial">
                        <Link className='cntSlink' href={'https://www.facebook.com/Mr.1Pie'}><FontAwesomeIcon icon={faFacebookSquare} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://x.com/MrPieX'}><FontAwesomeIcon icon={faYoutubeSquare} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://www.youtube.com/@Mr.1Pie'}><FontAwesomeIcon icon={faXTwitter} style={{width:'1.5rem'}}/></Link>

                        <Link className='cntSlink' href={'https://www.linkedin.com/in/heyAbdullahBro'}><FontAwesomeIcon icon={faLinkedin} style={{width:'1.5rem'}}/></Link>
                    </div>
                    <div className="cv">
                        <button>DOWNLOAD CV</button>
                    </div>
                </div>
            </div>
            <div className="cntcRight">
                <form action="">
                    <input placeholder='Write your name' type="text" required name="name" id="name" />
                    <input placeholder='Write your mail' type="text" required name="mail" id="mail" />
                    <textarea placeholder='Give me your suggestion' required name="message" id="message"></textarea>
                    <button>SEND</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;