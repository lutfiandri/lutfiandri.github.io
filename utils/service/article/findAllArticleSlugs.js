import { collection, getDocs } from 'firebase/firestore';
import { db } from 'utils/config/firebase';
import { firestoreCollection } from 'utils/config/firestoreCollection';

export async function findAllArticleSlugs() {
  try {
    const querySnapshot = await getDocs(
      collection(db, firestoreCollection.articles)
    );
    const allSlugs = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (!data?.external) {
        allSlugs.push(data.slug);
      }
    });
    return { slugs: allSlugs, error: null };
  } catch (error) {
    return { slugs: [], error: error };
  }
}
