import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "./storage";

export async function getImageUrls(folderName: string, type = "images") {
  const listRef = ref(storage, `${type}/${folderName}/`);
  const tmp: string[] = [];

  const allRef = await listAll(listRef);
  for (let index = 0; index < allRef.items.length; index++) {
    const itemRef = allRef.items[index];
    const url = await getDownloadURL(ref(storage, itemRef.fullPath));
    tmp.push(url);
  }

  return tmp;
}