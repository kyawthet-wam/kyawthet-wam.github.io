export type Work = {
    title: string;
    place: string;
    duration: string;
    link: string;
  };
  
  export const works: Work[] = [
    {
      title: "Odoo Developer",
      place: "Metateam Myanmar Co., Ltd",
      duration: "Dec 2019 - Feb 2020",
      link: "https://metateammyanmar.com/en/",
    },
    {
      title: "Mobile Developer",
      place: "lzdev.co",
      duration: "Feb 2021 - June 2022",
      link: "https://website-9f46b.web.app",
    },
    {
      title: "Mobile Developer",
      place: "TrailBlazers Software Development team",
      duration: "Sept 2022 - August 2023",
      link: "",
    },
    {
      title: "Mobile Developer (Night Remote)",
      place: "YC Fitness",
      duration: "Jan 2023 - Sept 2023",
      link: "https://www.yc.fitness",
    },
    {
      title: "Mobile Developer",
      place: "EDKA Digital",
      duration: "Sept 2023 - Present",
      link: "https://edkamm.com",
    },
  ];
  
  export type Project = {
    title: string;
    image: string;
    description: string;
    playStoreLink?: string;
    appStoreLink?: string;
    webLink?: string;
    photos?: string[];
    video?: string;
  };
  
  export const accPhotos: string[] = [];
  export const lz: string[] = [];
  export const gate: string[] = [];
  export const dict: string[] = [];
  export const yc: string[] = [];
  export const pos: string[] = [];
  export const deli: string[] = [];
  export const atmd: string[] = [];
  export const luckyXd: string[] = [];
  export let dover: string[] = [];
  export const fu: string[] = [];
  export const goldSell: string[] = [];
  export const fuDashboardVd = "";
  export const fuClientVd = "";
  export const pp = "";
  
  export const projects: Project[] = [
    {
      title: "E-commerce Dashboard",
      image: fu[fu.length - 1],
      description:
        "Sales Analystics , Inventory Management, Customer Relationship Management,Order Fulfillment, Financial Reporting ,User-Friendly Interface , Customization Options.",
      video: fuDashboardVd,
      photos: fu,
    },
    {
      image: fu[0],
      title: "E-commerce",
      description:
        "Jewellery ordering system containing manual payment,ordertracking, appointment booking and so on.",
      video: fuClientVd,
    },
    {
      image: lz[lz.length - 1],
      title: "Lazy Learning",
      description:
        "A learning resource app for Myanmar K-12 high school students. Contains over 19 years of old question papers from 2002 to the latest 2020 Matriculation Exam.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.lazydev.lazylearning",
      photos: lz,
    },
    {
      image: gate[gate.length - 1],
      title: "Receipt system for Car Gate",
      description:
        "Efficiently Managing parcel deliveries, seamlessly recording customer information and generating instantreceipts for a smooth and efficient shipping experience.",
      photos: gate,
    },
    {
      image: dict[dict.length - 1],
      title: "Dictionary",
      description:
        "Dive into the language world with this comprehensive dictionary app, offering dualUS and British pronunciations, all powered by a reliable open source SQLite database withoutinternet connection.",
      photos: dict,
    },
    {
      image: yc[yc.length - 1],
      title: "YC Fitness",
      description:
        "Fitness app which is accessible by specific member levels including nutrition plan, workouts and water level. This app contains social media platform like facebook with chatting, video call and notifications.",
  
      appStoreLink: "https://apps.apple.com/us/app/yc-fitness/id1666451656",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.yc_fitness&pli=1",
      photos: yc,
    },
    {
      image: accPhotos[accPhotos.length - 1],
      title: "Finance",
      description:
        "User-friendly expense tracking app, allowing users to effortlessly record and categorize expenses,resulting in improved financial awareness.",
      photos: accPhotos,
    },
    {
      image: pos[0],
      title: "New Empire POS (Web,Mobile)",
      description:
        "A cloud-based POS system into a retail environment, improving inventory management, and reducing checkouttimes",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.newempire.pos",
      photos: pos,
    },
    {
      image: deli[deli.length - 1],
      title: "Logistic Management",
      description:
        "Customer can check his order, route information and so on. Employee app with different employee roles containing route order management,route management, driver managementfor different routes, scan methods for orders, print service with both receipts and barcode labels, expense, customers, and so on.",
      photos: deli,
    },
    {
      image: atmd[0],
      title: "Aungthamardi - Customer",
      description:
        "Aung Thamardi Customer Application is dedicated forthe customers of Aung ThamardiGold&Jewellery shop for enhancing customer satisfaction.",
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
        "Aung ThamardiGold Sale App is an internal used application to coverthe gems and jewelry selling processes for Aung Thamardi Employees.",
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
    },
    {
      image: dover[dover.length - 1],
      title: "Dover",
      description:
        "Water management system from local water factory including daily sales across agents and factory, managing water bottles, income, expense and tracking water bottle based on customer.",
      photos: dover,
      webLink: "https://host-dover.web.app",
    },
  ];
  
  export type Navbar = {
    href: string,
    title: string;
  };

  export const navbars = [
    {
      href: "#about",
      title: "About"
    },
    {
      href: "#education",
      title: "Education"
    },
    {
      href: "#skills",
      title: "Skills"
    },
    {
      href: "#experiences",
      title: "Experiences"
    },
    {
      href: "#projects",
      title: "Projects"
    },
    {
      href: "#contacts",
      title: "Contacts"
    }
  ]