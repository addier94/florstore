import { collection, CollectionReference, getDocs } from "@firebase/firestore";
import { IPDAllFields } from "../redux/types/productDetailType";
import { db } from "../services/firebase-config";

export const getAllPDetail = async (userName: string, userID: string) => {
  const path = `/${userName}/product-detail/${userID}`;

  const pDetailCollect = collection(
    db,
    path
  ) as CollectionReference<IPDAllFields>;

  const pDetailSnap = await getDocs(pDetailCollect);

  const pDetail: Array<IPDAllFields> = [];

  pDetailSnap.forEach((val) => {
    return pDetail.push({
      ...val.data(),
      uid: val.id,
    });
  });

  return pDetail;
};
