
const posts_api = 'https://script.google.com/macros/s/AKfycbxY33YB3p7OzMB-unUZle3agJGhnPhD7LmWqhptnjXNCLJYYiimvTtqWPJ4xrToZbp3jw/exec'

const fetchPosts = async () => {
    const res = await fetch(posts_api)
    console.log('fetch res', res)
    if (res.status == 200) {
        return res.json()
    }
    return null
}


const submitPosts = async (data: any) => {
    var payload = data
    console.log('payload',payload)
    payload =  JSON.stringify(payload)
    const res = await fetch(posts_api, { method: 'POST', body: payload })
    console.log('submit res ', res)
    if(res.status == 200){
        console.log("response 200")
        return res.json()
    }
    return null
}


export { fetchPosts, submitPosts }