import { getAuth, onAuthStateChanged } from "firebase/auth";


const authenticate = async () => {
    const user_email = import.meta.env.VITE_PERSON_EMAIL
    var response: any = {};
    const auth = getAuth();
    await onAuthStateChanged(auth, (user) => {
        console.log('authenticate', user)
        if (user) { 
            
            response.user = user.uid;
            response.displayName = user.displayName;
            response.email = user.email;
            response.creationTime = user.metadata.creationTime;
            response.lastSignInTime = user.metadata.lastSignInTime;
        } else {
            // log out
            response = false
        }
    });
    if (response.email == user_email) return "1" // visibility access
    if (response.email !== user_email) return "3" // visibility access
    if (response) return false // visibility access
}


export { authenticate }