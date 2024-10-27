'use client';

import { api } from "@/config/api";

const LogOut = (props) => {
    const token =props.token;
    const handleLogOut=()=>{
        fetch(`${api}/user/logOut`,{
            method:'POST',
            headers:{
              'authorization':token
            },
            credentials:'include'
          })
          .then(res=>res.json())
          .then((res)=>{
            if (res.success===true) {
                alert(res.message);
                location.reload();
            }
          });
    };

    return (
        <div>
            <button onClick={handleLogOut} style={{borderRadius:'2rem',border:'none',cursor:'pointer'}}>LogOut</button>
        </div>
    );
};

export default LogOut;