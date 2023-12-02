import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";


async function getBasivMaster(type: string) {
    const q = query(collection(db, "basic-master"), where("type", "==", type));
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

export { getBasivMaster }