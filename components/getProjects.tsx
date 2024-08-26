import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "./storage";
import { getImageUrls } from "./getImageUrls";
import { Project } from "../types/definitions";

// Define cache keys and expiry
const CACHE_KEY = 'cachedVideoUrls';
const PROJECTS_CACHE_KEY = 'cachedProjects';
const CACHE_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

const isBrowser = typeof window !== 'undefined';

// Check if cache has expired
function isCacheExpired(timestamp: number): boolean {
  return Date.now() - timestamp > CACHE_EXPIRY_MS;
}

// Load cached video URLs from localStorage
function loadCache(): { [key: string]: string } {
  if (!isBrowser) return {};
  const cache = localStorage.getItem(CACHE_KEY);
  return cache ? JSON.parse(cache) : {};
}

// Save video URLs cache to localStorage
function saveCache(cache: { [key: string]: string }) {
  if (isBrowser) {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  }
}

let cachedVideoUrls = loadCache();

// Fetch or get cached URL for videos
async function fetchOrGetCachedURL(path: string): Promise<string> {
  if (cachedVideoUrls[path]) {
    return cachedVideoUrls[path];
  }
  try {
    const url = await getDownloadURL(ref(storage, path));
    cachedVideoUrls[path] = url;
    saveCache(cachedVideoUrls);
    return url;
  } catch (error) {
    console.error(`Failed to fetch URL for path: ${path}`, error);
    throw error; // Propagate error to handle it in the caller function
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!isBrowser) {
    throw new Error("Not running in a browser environment");
  }

  // Check if projects are already stored in localStorage and not expired
  const cachedProjectsJSON = localStorage.getItem(PROJECTS_CACHE_KEY);
  
  if (cachedProjectsJSON) {
    const { timestamp, projects } = JSON.parse(cachedProjectsJSON);
    
    if (!isCacheExpired(timestamp)) {
      return projects;
    }
  }

  // Fetch data from Firebase and other sources
  const [
    accPhotos,
    lz,
    gate,
    dict,
    yc,
    pos,
    deli,
    atmd,
    luckyXd,
    fu,
    dover,
    goldSell,
    fuDashboardVd,
    fuClientVd,
    mwk,
    missme,
    amt,
  ] = await Promise.all([
    getImageUrls("acc"),
    getImageUrls("lz"),
    getImageUrls("gate"),
    getImageUrls("dict"),
    getImageUrls("yc"),
    getImageUrls("pos"),
    getImageUrls("deli"),
    getImageUrls("atmd"),
    getImageUrls("luckyxd"),
    getImageUrls("fu"),
    getImageUrls("dover"),
    getImageUrls("gold_sell"),
    fetchOrGetCachedURL("videos/client.MP4/"),
    fetchOrGetCachedURL("videos/dashboard.mp4/"),
    getImageUrls("mwk"),
    getImageUrls("missme"),
    getImageUrls("amt"),
  ]);

  const projects = [
    {
      title: "E-commerce Dashboard",
      image: fu[fu.length - 1],
      description:
        "Key features include sales analytics, inventory management, customer relationship management, order fulfillment, financial reporting, a user-friendly interface, and customization options.",
      video: fuDashboardVd,
    },
    {
      image: fu[0],
      title: "E-commerce",
      description:
        "The jewelry ordering system includes features such as manual payment processing, order tracking, appointment booking, and more.",
      video: fuClientVd,
    },
    {
      image: lz[lz.length - 1],
      title: "Lazy Learning",
      description:
        "The educational app tailored for Myanmar K-12 high school students provides a comprehensive repository of past question papers, covering the period from 2002 to the latest 2020 Matriculation Exam.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.lazydev.lazylearning",
      photos: lz,
    },
    {
      image: gate[gate.length - 1],
      title: "Receipt system for Car Gate",
      description:
        "Efficiently Managing parcel deliveries, seamlessly recording customer details and generating instant receipts for a smoother shipping experience.",
      photos: gate,
    },
    {
      image: dict[dict.length - 1],
      title: "Dictionary",
      description:
        "Dive into the language world with this comprehensive dictionary app, offering dual US and British pronunciations, all powered by a reliable open source SQLite database without internet connection.",
      photos: dict,
    },
    {
      image: yc[yc.length - 1],
      title: "YC Fitness",
      description:
        "Unlock personalized member levels featuring tailored nutrition plans, workout routines, and hydration tracking. Seamlessly integrated with top social media platforms like Facebook, enjoy chatting, video calls, and instant notifications for an enriched experience.",
      appStoreLink: "https://apps.apple.com/us/app/yc-fitness/id1666451656",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.yc_fitness&pli=1",
      photos: yc,
    },
    {
      image: accPhotos[accPhotos.length - 1],
      title: "Finance",
      description:
        "Experience a user-friendly expense tracking app designed for effortless management. Record and categorize expenses seamlessly to enhance financial awareness and control.",
      photos: accPhotos,
    },
    {
      image: pos[0],
      title: "New Empire POS (Web, Mobile)",
      description:
        "Cloud-based POS system for retail environment to enhance inventory management and streamline checkout processes, reducing waiting times for customers.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.newempire.pos",
      photos: pos,
    },
    {
      image: deli[deli.length - 1],
      title: "Logistic Management",
      description:
        "Checking orders and receiving real-time updates of route information for orders are available on the client app. Meanwhile, the employee app offers various roles for managing different aspects, including route order management, route management, driver assignments for different routes, scanning methods for orders, printing services for receipts and barcode labels, expense tracking, customer management, and more.",
      photos: deli,
    },
    {
      image: atmd[0],
      title: "Aungthamardi - Customer",
      description:
        "The Aung Thamardi Customer Application is designed exclusively for customers of Aung Thamardi Gold & Jewellery shop, aimed at enhancing customer satisfaction.",
      appStoreLink:
        "https://apps.apple.com/us/app/aung-thamardi-customer/id6450292142",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=atmd.app.customer",
      photos: atmd,
    },
    {
      image: goldSell[0],
      title: "Aungthamardi - Gold Sell",
      description:
        "The Aung Thamardi Gold Sale App is an internal application used by Aung Thamardi employees to facilitate the selling processes for gems and jewelry.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=atmd.app.goldsell",
      photos: goldSell,
    },
    {
      image: luckyXd[0],
      title: "LuckyXD",
      description:
        "To streamline and optimize the operations of businesses involved in international trade and commerce",
      photos: luckyXd,
      appStoreLink: "https://apps.apple.com/us/app/lucky-xd/id6475064267",
    },
    {
      image: dover[dover.length - 1],
      title: "Dover",
      description:
        "Water management system from local water factory including daily sales across agents and factory, managing water bottles, income, expense and tracking water bottle based on customer.",
      photos: dover,
      webLink: "https://host-dover.web.app",
    },
    {
      image: mwk[mwk.length - 1],
      title: "Moe Wai Kyaw Cafe",
      description:
        "Provides seamless raw food management, daily profit tracking, monthly profit charts, expense management, and sales analytics in a user-friendly platform.",
      photos: mwk,
    },
    {
      image: missme[missme.length - 1],
      title: "Miss Me BBQ",
      description:
        "Designed for BBQ lovers, our app lets you easily browse the menu with photos and detailed descriptions. Earn points with every purchase and redeem them for rewards. Stay informed about special events, live music, and exclusive happenings at restaurant",
      photos: missme,
      appStoreLink: "https://apps.apple.com/us/app/id6505016027",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.missmebbq.customerapp",
    },
    {
      image: amt[amt.length - 1],
      title: "Aung Myittar Distribution Management System",
      description:
        "This is an application designed to streamline and automate the sales process within a business.",
      photos: amt,
      inDevelopment: true,
    },
  ];

  const cacheData = {
    timestamp: Date.now(),
    projects,
  };
  localStorage.setItem(PROJECTS_CACHE_KEY, JSON.stringify(cacheData));

  return projects;
}
