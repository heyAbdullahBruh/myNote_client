'use client';
const ErrorPage = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column', width:'100%',height:'100vh'}}>
            <h2>Status Code:500</h2>
            <h3>Error : Server Error..!</h3>
            <h3>Message : Something Went is worng.</h3>
        </div>
    );
};

export default ErrorPage;