import { auth } from '@/firebase.config';
import { useAuth } from '@clerk/nextjs';
import { signInWithCustomToken } from 'firebase/auth';

export default FirebaseUI = () => {

    const { getToken } = useAuth();
    
    const signInWithClerk = async () => {
    
        console.log('Sign in with clerk');
        
        const token = await getToken({ template: 'integration_firebase' });

        const userCredentials = await signInWithCustomToken(auth, token || '');
        // The userCredentials.user object can call the methods of
        // the Firebase platform as an authenticated user.
        console.log('User:', userCredentials.user);
    };
};
