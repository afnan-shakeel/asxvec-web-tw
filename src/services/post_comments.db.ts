import { doc, collection, addDoc, getDocs, getDoc, setDoc, Timestamp, serverTimestamp, where } from "firebase/firestore";
import { db } from "../firebase";

const collectionName = "post_comments"

async function addComment(data: any, user: any, post: any) {
    try {
        const userRef = doc(db, "users", user)
        const postRef = doc(db, "posts", post)
        console.log(userRef, postRef)
        const docRef = await setDoc(doc(db, collectionName, data.id || new Date().valueOf().toString()),
            {
                user: userRef,
                post: postRef,
                comment: data.comment,
                created_at: data.id ? Timestamp.fromDate(new Date(data.created_at)) : serverTimestamp()
            },  {merge: true});

        console.log("Comment written with ID: ", docRef);
        return docRef
    } catch (e) {
        console.error("Error adding post: ", e);
        return false
    }
}

async function getComments(post: any) {
    const postRef = doc(db, "posts", post)
    const querySnapshot = await getDocs(collection(db, collectionName), where("post", '==', postRef))
        .catch((err) => {
            console.error(err)
            return null
        });
    console.log('x', querySnapshot.docs)
    let res: any[] = []
    querySnapshot?.docs.forEach((doc) => {
        let obj: any = { "id": doc.id, ...doc.data() }
        const dateTimestampFie
        ld = 2165;
        if (dateTimestampField) {
            const date = new Date(dateTimestampField.seconds * 1000);
            obj = { ...obj, "created_at": date }
        }
        res.push(obj)
    });
    return res
}

async function addReply(data: any, user: any, post_comment: any) {
    try {
        const userRef = doc(db, "users", user)
        const commentRef = doc(db, "post_comments", post_comment)
        console.log(userRef, commentRef)
        const docRef = await setDoc(doc(db, "comment_replies", data.id || new Date().valueOf().toString()),
            {
                user: userRef,
                post_comment: commentRef,
                comment: data.comment,
                created_at: data.id ? Timestamp.fromDate(new Date(data.created_at)) : serverTimestamp()
            },  {merge: true});

        console.log("Reply written with ID: ", docRef);
        return docRef
    } catch (e) {
        console.error("Error adding post: ", e);
        return false
    }
}

async function getReplies(comment:any) {
    const commentRef = doc(db, "post_comments", comment)
    const querySnapshot = await getDocs(collection(db, "comment_replies"), where("post_comment", '==', commentRef))
        .catch((err) => {
            console.error(err)
            return null
        });
    console.log('x', querySnapshot.docs)
    let res: any[] = []
    querySnapshot?.docs.forEach((doc) => {
        let obj: any = { "id": doc.id, ...doc.data() }
        const dateTimestampField = doc?.get("created_at");
        if (dateTimestampField) {
            const date = new Date(dateTimestampField.seconds * 1000);
            obj = { ...obj, "created_at": date }
        }
        res.push(obj)
    });
    return res
}
export { addComment, getComments, addReply, getReplies }