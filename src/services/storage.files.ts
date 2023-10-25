import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";


// const storageRef = ref(storage);
// const imagesRef = ref(storage, "images");
const timelineImageRef = ref(storage, "images/timeline");

// gs://asxvec.appspot.com/images/timeline/Screenshot 2023-09-04 115724.png

async function timelineImageUpload(file: File, metadata: any = null) {
    // 'file' comes from the Blob or File API
    var fileRef = ref(storage, timelineImageRef.fullPath + "/" + file.name)
    const upload = await uploadBytes(fileRef, file, metadata).catch((error) => {
        console.error(error);
        throw error
    })
    const url = getDownloadURL(upload.ref)
    return url
}


export { timelineImageUpload }

