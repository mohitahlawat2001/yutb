// import googleapikey form .env file
// REACT_APP_GOOGLE_API_KEYogleApiKey = AIzaSyDApN4X5NQIGQrMz8_FTwaB8pJWFvD7uZU
const googleApiKey = 'AIzaSyB1jUBX596pHhkDcSqaPr2VAGv9UHfEkhg'

export const YOUTUBE_VIDEO_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${googleApiKey}`;