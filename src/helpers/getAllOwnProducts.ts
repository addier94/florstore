import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../services/firebase-config";

export const getAllOwnProducts = async (userName: string, userID: string) => {
  const q = query(collection(db, `/${userName}/product/${userID}`));
  const productsSnap = await getDocs(q);

  const products: any = [];

  productsSnap.forEach((product) => {
    products.push({
      uid: product.id,
      ...product.data(),
    });
  });
  return products;
};
