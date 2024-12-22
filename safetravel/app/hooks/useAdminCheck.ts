import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useAdminCheck = () => {
    const router = useRouter();

    useEffect(() => {
        const role= localStorage.getItem('role');
        if (!role) {
            router.push('/');
            return;
        }

        if (role!=='admin1211') {
            router.push('/unauthorized');
        }
    }, [router]);
};