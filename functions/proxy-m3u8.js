import fetch from "node-fetch";

export async function handler(event, context) {
  // মূল m3u8 লিংক (যা আপনি চেঞ্জ করতে পারবেন)
  const originalM3U8 = "https://livecdn-bostaflix.global.ssl.fastly.net/api/45dc1e0f41/playlist.m3u8";

  try {
    const res = await fetch(originalM3U8);
    const text = await res.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Access-Control-Allow-Origin": "*", // CORS allow
      },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error fetching m3u8: " + err.message,
    };
  }
}
