
const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${googleApiKey}`;

export const YOUTUBE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=chrome&ds=yt&q=";