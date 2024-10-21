import './banner.css';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="bLeft">
                    <h1>Hi There ...!</h1>
                    <h2>Iam Mr.Pie || Web developer</h2>
                    <h3>Iam a Bangaladeshi developer.</h3>
                    <h4>I expert in MERN Stack Web Development .</h4>
            </div>
            <div className="bRight">
                <img src={'https://i.postimg.cc/c1zvcyjg/In-Shot-20231022-081358814.png'}  alt='myImage'/>
            </div>
        </section>
    );
};

export default Banner;