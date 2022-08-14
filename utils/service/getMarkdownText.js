import axios from 'axios';

export async function getMarkdownText(slug, prefix = []) {
  try {
    const result = await axios({
      method: 'GET',
      url: `https://firebasestorage.googleapis.com/v0/b/${
        process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
      }/o/${[...prefix, slug].join('%2F')}.md?alt=media`,
    });
    return { markdown: result, error: null };
  } catch (error) {
    return { markdown: null, error: error };
  }
}
