export const getVideos = async (query) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${YOUTUBE_API_KEY}`
  );

  const data = await response.json();
  return data.items
    .map((image) => {
      return image.snippet
        ? { id: image.etag, image: image.snippet.thumbnails.high.url }
        : undefined;
    })
    .filter((el) => el)
};
