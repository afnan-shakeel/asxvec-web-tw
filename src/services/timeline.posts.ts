const timeline_api = 'https://script.google.com/macros/s/AKfycbx9vzJJGmgGAyrCv9fQT4AIqzQLih5XK9I7aLLMecAjvMD1hVnRMhM2hVynjqzwm3t6uw/exec'

const fetchTimelines = async () => {
    const res = await fetch(timeline_api)
    console.log('fetch res', res)
    if (res.status == 200) {
        return res.json()
    }
    return null
}

const submitTimeline = async (data: any) => {
    console.log('submit data', data)
}

export { fetchTimelines, submitTimeline }