import LogIn from '@/components/logIn/LogIn';
import { cookies } from "next/headers";
const login =async () => {
    // const router=useRouter();
    const cookieStore=await cookies();
    const token = cookieStore.get('token')?.value;
        return (
            <>
                <LogIn token={token}/>
            </>
        );
};

export default login;