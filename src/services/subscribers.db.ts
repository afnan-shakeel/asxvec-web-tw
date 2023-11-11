import { doc, collection, addDoc, getDocs, setDoc, Timestamp, where, query, orderBy,serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import dayjs from 'dayjs';

const fetchSubscribers = async (user_id: string) => {
    const q = query(collection(db, "subscribers"), where("user_id", '==', user_id), orderBy("created_at"));
    const querySnapshot = await getDocs(q).catch((err) => {
        console.error(err)
        return null
    });
    // console.log(querySnapshot.size)
    let res: any[] = []
    querySnapshot?.forEach(async (doc) => {
        // let y = doc.data().date.toMillis()
        let obj = doc.data()
        let milliDate = doc.data().created_at.toMillis()
        console.log("milli  date", milliDate)
        if (!milliDate) return
        let date = dayjs(milliDate)
        let formatDate = date.format('ddd, MMM D, YYYY')
        let formatedDate = formatDate
        obj.created_at = formatedDate
        res.push(obj)
    })
    console.log(res)
    return res
}


const submitSubscriber = async (data: any) => {
    var payload = data
    console.log('payload', payload)
    if (data.id) {
        await setDoc(doc(db, "subscribers", data.id),
            {
                user_id: data.user_id,
                subscriber_id: data.subscriber_id,
                created_at: Timestamp.fromDate(new Date(data.created_at)),
            },

            { merge: true });
        return data.id
    }
    const docRef = await addDoc(collection(db, "subscribers"), {
        user_id: data.user_id,
        subscriber_id: data.subscriber_id,
        created_at: serverTimestamp(),
    });

    return docRef.id
}


export { fetchSubscribers, submitSubscriber }