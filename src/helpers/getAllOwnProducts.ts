import { collection, CollectionReference, getDocs } from "@firebase/firestore";
import { IGetAllProduct, IProducts } from "../redux/types/productsUserType";
import { db } from "../services/firebase-config";

export const getAllOwnProducts = async (
  userName: string,
  userID: string
): Promise<IGetAllProduct> => {
  const path = `/${userName}/product/${userID}`;

  const productCollect = collection(db, path) as CollectionReference<IProducts>;
  // const productCollect = () => collection(db, path) as CollectionReference<IProducts>;
  // const PostDoc = (id: string) => doc(db, "posts", id) as DocumentReference<Post>;

  const productsSnap = await getDocs(productCollect);

  const products: IGetAllProduct = [];

  productsSnap.docs.map((product) => {
    products.push({
      uid: product.id,
      ...product.data(),
    });
  });

  // productsSnap.forEach((product) => {
  //   products.push({
  //     uid: product.id,
  //     ...product.data(),
  //   });
  // });
  return products;
};
