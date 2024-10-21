import { faCode, faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './service.css';
const Service = () => {
    return (
        <section id='service'>
            <div className="servHead">
                <h1>My Services</h1>
            </div>
            <div className="servDesc">
                <div className="servs">
                    <FontAwesomeIcon icon={faCode} style={{width:'2rem'}}/>
                    <h3>FrontEnd</h3>
                    <p>I will be able to desing your website .</p>
                </div>
                <div className="servs">
                    <FontAwesomeIcon icon={faServer} style={{width:'2rem'}}/>
                    <h3>BackEnd</h3>
                    <p>I will be able to  make your site web server.</p>
                </div>
                <div className="servs">
                    <FontAwesomeIcon icon={faDatabase} style={{width:'2rem'}}/>
                    <h3>Database</h3>
                    <p>I expert in MongoDB for database management system.</p>
                </div>
            </div>

        </section>
    );
};

export default Service;