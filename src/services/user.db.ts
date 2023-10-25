import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const collectionName = "users"

async function getUserById(id: string) {
    const querySnapshot = await getDoc(doc(db, collectionName, id)).catch((err) => {
        console.error(err)
        return null
    });
    return { "id": querySnapshot?.id, ...querySnapshot?.data() }
}

export { getUserById }