import { doc, collection, getDocs, setDoc, Timestamp, serverTimestamp, addDoc } from "firebase/firestore";
import { db } from "../firebase";

async function testAdd() {
    await addDoc(collection(db, "posts"), {
        test_data: { primary: { a: 1 }, secondary: { b: 1 } }
    })
}

// import {inject } from 'vue'
// const firestore = inject<Firestore>('firestore')

async function addPost(data: any, user: any = null) {
    try {
        console.log('x', data, user)
        if (data.id) {
            const postRef = await setDoc(doc(db, "posts", data.id),
                {
                    title: data.title || null,
                    subtitle: data.subtitle || null,
                    context: data.context || null,
                    image_url: data.image_url || null,
                    topic_tags: data.topic_tags || null,
                    visibility: data.visibility || null,
                    created_at: Timestamp.fromDate(new Date(data.created_at)),
                },
                { merge: true });
            console.log("Post updated with ID: ", postRef);
            return postRef
        }

        const postRef = await addDoc(collection(db, "posts"), {
            title: data.title || null,
            subtitle: data.subtitle || null,
            context: data.context || null,
            image_url: data.image_url || null,
            topic_tags: data.topic_tags || null,
            visibility: data.visibility || null,
            created_at: serverTimestamp(),
            user: { username: user.username, id: user.id }
        });
        console.log("Post added with ID: ", postRef);

        return postRef

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
            console.log(doc.id, " => ", date);
            obj = { ...obj, "created_at": date }
        }
        res.push(obj)
    });
    // res.forEach(x=>{
    //     // console.log(x.user.id)
    // })
    return res
}

export { addPost, getPosts, testAdd }