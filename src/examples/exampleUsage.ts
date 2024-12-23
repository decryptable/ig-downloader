import InstagramDownloader from "..";

/* The `const urls` array is storing two Instagram URLs. Each URL points to a specific Instagram post
or reel. These URLs are used in the `fetchInstagramData` function to fetch data from Instagram using
the `InstagramDownloader` function. The function iterates over each URL in the array, fetches data
for that URL, and then logs the Instagram data or any errors encountered during the process. */
const urls = [
  "https://www.instagram.com/reel/DD3ja60ICGm/?utm_source=ig_web_copy_link",
  "https://www.instagram.com/p/DD6_fC1TkcK/?utm_source=ig_web_copy_link",
];

const fetchInstagramData = async () => {
  for (const url of urls) {
    try {
      console.log(`Fetching data for: ${url}`);
      const data = await InstagramDownloader(url);
      console.log("Instagram Data:", data);
    } catch (error) {
      console.error(
        `Error fetching data for ${url}:`,
        (error as Error).message
      );
    }
  }
};

fetchInstagramData();
