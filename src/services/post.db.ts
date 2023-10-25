import { doc, collection, getDocs, setDoc, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";


async function addPost(data: any, user: any) {
    try {
        const userRef = doc(db, "users", user)
        const docRef = await setDoc(doc(db, "posts", data.id || new Date().valueOf().toString()), {
            user: userRef || null,
            title: data.title || null,
            subtitle: data.subtitle || null,
            context: data.context || null,
            image_url: data.image_url || null,
            topic_tags: data.topic_tags || null,
            visibility: data.visibility || null,
            created_at: data.id ? Timestamp.fromDate(new Date(data.created_at)) : serverTimestamp()
        });
        console.log("Post written with ID: ", docRef);
        return docRef
    } catch (e) {
        console.error("Error adding post: ", e);
        return false
    }
}

async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts")).catch((err) => {
        console.error(err)
        return null
    });
    let res: any[] = []
    await querySnapshot?.forEach((doc) => {
        let obj: any = { "id": doc.id, ...doc.data() }
        // obj.user = obj.user.get()
        const dateTimestampField = doc?.get("created_at");
        if (dateTimestampField) {
            const date = new Date(dateTimestampField.seconds * 1000);
            obj = { ...obj, "created_at": date }
        }
        res.push(obj)
    });
    // res.forEach(x=>{
    //     // console.log(x.user.id)
    // })
    return res
}

export { addPost, getPosts }