import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "../services/firebase-config";

export const getAllOwnProducts = async (userID: string): Promise<{}[]> => {
  const productsSnap = await getDocs(
    query(collection(db, `/${userID}/user/products`))
  );

  const products: Array<object> = [];

  productsSnap.forEach((product) => {
    products.push({
      uid: product.id,
      ...product.data(),
    });
  });
  return products;
};
