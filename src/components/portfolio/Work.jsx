import './work.css';
const Work = () => {
    return (
        <section className='work' id='portfolio'>
            <div className="wrkHead">
              <h1>My Works</h1>
            </div>
            <div className="wrkBody">
                <div className="works">
                    <img src="https://i.postimg.cc/0jqHybkw/e-commerse.jpg" alt="ecommerce" />
                    <div className="layer">
                        <h3>E-commerce Project</h3>
                        <p>This is CSS EXPRESS e-commerce project. In this project is used to HTML ,CSS,JAVASCSIPT ,NODE , EXPRESS & MONOGODB for database management system.Overall design the project I used Most populer JavaScript library REACT.</p>
                    </div>
                </div>
                <div className="works">
                    <img src="https://i.postimg.cc/FsXxd7MP/Server-Code.png" alt="serverCode" />
                    <div className="layer">
                        <h3>Server code</h3>
                        <p>Thoose code is server site language code.I can create web server API by coding like this. I use server programming language for making web server API. </p>
                        </div>
                </div>
                <div className="works">
                    <img src="https://i.postimg.cc/QMzQXtgJ/api.jpg" alt="apiMake" />
                    <div className="layer">
                        <h3>API MAKE</h3>
                        <p>It's my user social posts API project. The project is server api among which users can add,update,cheak,delete any posts. The server api is fully REST api . In this project I used NODE , EXPRESS & MONOGODB etc server site language.</p>
                        </div>
                </div>
                <div className="works">
                    <img src="https://i.postimg.cc/WpgGvsd0/portfolio.jpg" alt="ecommerce" />
                    <div className="layer">
                        <h3>Porfolio</h3>
                        <p>The project is a Portfolio project.In this portfolio website is an excellent way to showcase work, skills, and personality.In this project I have used HTML, CSS , JavaScript, React etc design language and library. </p>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Work;