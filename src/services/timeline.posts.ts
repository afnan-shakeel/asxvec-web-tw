import { doc, collection, addDoc, getDocs, setDoc, Timestamp, where, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";
import dayjs from 'dayjs';

// const timeline_api = 'https://script.google.com/macros/s/AKfycbyWDavz6dnFm39RGn4Z8ry4BPUfQV0QPjUUuWK4beS9oJJXN27ML5BsrF9V8-X-7Zfe7Q/exec'

const fetchTimelines = async (conditions: any[]) => {
    let q: any = collection(db, "timeline");

    conditions.forEach(condition => {
        q = query(q, where(condition.field, condition.operator, condition.value));
    });

    q = query(q, orderBy("date", 'desc'));

    // const q = query(collection(db, "timeline"), where("topic_tags", '==', 'palestine-israel'), orderBy("date", 'desc'));
    const querySnapshot = await getDocs(q).catch((err) => {
        console.error(err)
        return null
    });
    // console.log(querySnapshot.size)
    let res: any[] = []
    querySnapshot?.forEach(async (doc) => {
        // let y = doc.data().date.toMillis()
        let obj = doc.data()
        console.log("obj", obj)
        let milliDate = doc.data().date.toMillis()
        // console.log("milli  date", milliDate)
        if (!milliDate) return
        let date = dayjs(milliDate)
        let formatDate = date.format('ddd, MMM D, YYYY')
        let formatedDate = formatDate
        obj.date = formatedDate
        res.push(obj)
    })
    console.log(res)
    return res
}

const submitTimeline = async (data: any) => {
    var payload = data
    console.log('payload', payload)
    if (data.id) {
        await setDoc(doc(db, "timeline", data.id), {
            topic_tags: data.topic_tags,
            title: data.title,
            context: data.context,
            visibility: data.visibility,
            date: Timestamp.fromDate(new Date(data.date)),
            files: data.files || null
        });
        return data.id
    }
    const docRef = await addDoc(collection(db, "timeline"), {
        topic_tags: data.topic_tags,
        title: data.title,
        context: data.context,
        visibility: data.visibility,
        date: Timestamp.fromDate(new Date(data.date)),
        files: data.image_url || null
    });

    return docRef.id
}

const updateFiles = async (key: string, files: string[]) => {
    console.log(files)
    await setDoc(doc(db, "timeline", key), {
        files: files || null
    },
        { merge: true });
    return key
}

export { fetchTimelines, submitTimeline, updateFiles }