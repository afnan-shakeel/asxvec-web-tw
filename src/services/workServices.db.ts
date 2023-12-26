import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
 


async function getWorkServices() {
    const q = query(collection(db, "work-services"), orderBy("created_at", "asc"));
    const querySnapshot = await getDocs(q).catch((err) => {
        console.error(err)
        return null
    });
    let res: any[] = []
    await querySnapshot?.forEach((doc) => {
        let obj: any = { "id": doc.id, ...doc.data() }

        res.push(obj)
    });
    return res
}

export { getWorkServices }