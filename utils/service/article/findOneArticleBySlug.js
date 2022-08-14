import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { exception } from 'utils/config/exception';
import { db } from 'utils/config/firebase';
import { firestoreCollection } from 'utils/config/firestoreCollection';

export async function findOneArticleBySlug(slug) {
  try {
    const q = query(
      collection(db, firestoreCollection.articles),
      where('slug', '==', slug),
      limit(1)
    );

    let article;

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      article = data;
    });

    if (!article) {
      return {
        article: undefined,
        error: new Error(exception.statusTextNotFound),
      };
    }

    return { article: article, error: null };
  } catch (error) {
    return { article: null, error: error };
  }
}
