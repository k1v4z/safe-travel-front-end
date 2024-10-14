import { useContext, useEffect } from "react"
import { useRouter } from 'next/navigation';
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
    const router = useRouter()
    const authContext = useContext(AuthContext)

    useEffect(() => {
        //If loaded completely
        if (authContext && !authContext.isLoading) {
            if(!authContext.authenticated){
                router.push('/login')
            }
        }
    }, [authContext, router])
}

export default useAuth