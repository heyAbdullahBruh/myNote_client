// import axios from 'axios';
// import { NextResponse } from 'next/server'
// // import { auth } from './config/auth';
// // import { api } from './config/api';

// const protectRoute=['/mrpie/personalinfo/friend'];
// // const isAuth=true;
 
//  function  middleware (req){
  
//   axios.get('http://localhost:1618/api/v1/user/auth',{withCredentials:true})
//      .then((res)=>{
//         const isAuth= res.data.auth;
//         if (isAuth===false && protectRoute.includes(req.nextUrl.pathname)) {
//           const absUrl = new URL('/mrpie/auth/login',req.nextUrl.origin);
//           return NextResponse.redirect(absUrl.toString());
//         };
//      }).catch((err)=>console.log(err));

// };
// export default middleware;