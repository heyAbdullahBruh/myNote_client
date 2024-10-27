import React from 'react';

const MrPieHome = () => {
    const secStyle={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        width:'100%',
        height:'80vh',
    }
    return (
        <section style={secStyle}>
            <h1 style={{fontSize:'3rem'}}>Hi Mr.Pie....!!</h1>
            <h2 style={{fontSize:'2rem'}}>Welcome to Your private world</h2>
            <h2>Let's Exploring your world ......</h2>
        </section>
    );
};

export default MrPieHome;