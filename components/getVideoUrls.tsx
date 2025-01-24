import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./storage";

export async function getVideoUrls(folderName: string) {
  return await getDownloadURL(ref(storage, "videos/client.MP4/"));
}