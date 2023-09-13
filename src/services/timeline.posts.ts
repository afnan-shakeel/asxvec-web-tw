const timeline_api = 'https://script.google.com/macros/s/AKfycbyWDavz6dnFm39RGn4Z8ry4BPUfQV0QPjUUuWK4beS9oJJXN27ML5BsrF9V8-X-7Zfe7Q/exec'

const fetchTimelines = async () => {
    const res = await fetch(timeline_api)
    console.log('fetch res', res)
    if (res.status == 200) {
        return res.json()
    }
    return null
}

const submitTimeline = async (data: any) => {
    var payload = data
    console.log('payload',payload)
    payload =  JSON.stringify(payload)
    const res = await fetch(timeline_api, { method: 'POST', body: payload })
    console.log('submit res ', res)
    if(res.status == 200){
        console.log("response 200")
        return res.json()
    }
    return null
}

export { fetchTimelines, submitTimeline }