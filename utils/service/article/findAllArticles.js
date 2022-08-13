import { collection, getDocs } from 'firebase/firestore';
import { db } from 'utils/config/firebase';

export async function findAllArticles() {
  try {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    const allData = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      allData.push(data);
    });
    return { articles: allData, error: null };
  } catch (error) {
    return { articles: null, error: error };
  }
}
