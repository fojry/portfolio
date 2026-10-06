export interface MediaItem {
  id: string;
  type: "youtube" | "tiktok" | "video" | "image" | "instagram" | "behance";
  title: string;
  src: string;
  thumbnail?: string;
  sourceHref?: string;
}

export interface WorkCollection {
  slug: string;
  label: string;
  title: string;
  thumbnailVideo?: string;
  summary: string;
  accent: string;
  featured?: boolean;
  detailTagline: string;
  description: string;
  layout?: "grid" | "centered";
  media: MediaItem[];
}

export const WORKS_DATA: WorkCollection[] = [
  {
    slug: "edited-gaming-moments",
    label: "Edited Gaming Moments",
    title: "Edited Gaming Moments",
    summary:
      "Gameplay edit with subtitles, meme timing, funny moments, and chaotic cuts.",
    accent:
      "linear-gradient(135deg, rgba(56, 189, 248, 0.3), rgba(15, 23, 42, 0.95)), radial-gradient(circle at center, rgba(125, 211, 252, 0.32), transparent 44%)",
    featured: true,
    detailTagline: "Gaming Edit",
    description:
      "Subtitle-heavy gameplay videos packed with jokes, meme inserts, and fun moment edits.",
    media: [
      {
        id: "game-1",
        type: "youtube",
        title: "Keluar Dari Semua Level Backroom",
        src: "https://youtu.be/fn83zqydST8?si=GCaCcf5554nKuZir",
        thumbnail: "/projects/tamnelbekrum2.png",
      },
      {
        id: "game-2",
        type: "youtube",
        title: "THE WORST GMOD MAP OF 2022 | Garry's Mod Indonesia",
        src: "https://www.youtube.com/watch?v=90fQ5i4pVPY&t=5s",
        thumbnail: "/projects/rosblox.png",
      },
      {
        id: "game-3",
        type: "youtube",
        title: "QiuEnEi #3 ft. Fajry & babu-babu",
        src: "https://youtu.be/OB207sgQwnc?si=XrDV6zdMbpLF5MgO",
        thumbnail: "/projects/phe.jpg",
      },
      {
        id: "game-4",
        type: "tiktok",
        title: "siapa yang cita citanya kalo udah gede nanam 🌴 ?? - Roblox",
        src: "https://www.tiktok.com/@prwdences/video/7618959818685975828",
        thumbnail: "/projects/motion-reel.jpg",
      },
      {
        id: "game-5",
        type: "tiktok",
        title: "Cooking Chaos",
        src: "https://www.tiktok.com/@simpangbojack/video/7588870093765922056",
        thumbnail: "/projects/rosblox.png",
      },
    ],
  },
  {
    slug: "motion-graphic",
    label: "Motion Graphic",
    title: "Motion Graphic",
    summary: "Kinetic type, explainer segments, and clean product animation.",
    accent:
      "linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(15, 23, 42, 0.92)), radial-gradient(circle at 80% 20%, rgba(186, 230, 253, 0.26), transparent 35%)",
    detailTagline: "Selected Pieces",
    description:
      "Layout and pacing focused pieces that can mix typography, UI fragments, and product visual language.",
    media: [
      {
        id: "mg-1",
        type: "video",
        title: "3rd Anniversary Motion Reel",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnail: "/projects/motion-reel.jpg",
      },
      {
        id: "mg-2",
        type: "video",
        title: "Aku dan Acha - Roblox Kinetic",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnail: "/projects/rosblox.png",
      },
      {
        id: "mg-3",
        type: "behance",
        title: "Latisan Videography",
        src: "https://www.behance.net/gallery/213304253/Latisan",
        thumbnail: "/projects/latisancover.png",
        sourceHref: "https://www.behance.net/gallery/213304253/Latisan",
      },
      {
        id: "mg-4",
        type: "video",
        title: "2nd Anniversary Kinetic Ident",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
        thumbnail: "/character-banner.jpg",
      },
    ],
  },
  {
    slug: "short-film-videography",
    label: "Short Film / Videography",
    title: "Short Film / Videography",
    summary:
      "Narrative storytelling, short films, cinematic sequences, and creative videography production.",
    accent:
      "linear-gradient(135deg, rgba(30, 79, 118, 0.52), rgba(10, 10, 10, 0.95)), radial-gradient(circle at 20% 20%, rgba(127, 205, 255, 0.22), transparent 34%)",
    detailTagline: "Cinematic Works",
    description:
      "A curated collection of short films, narrative visual storytelling, cinematic camera work, and video production projects.",
    media: [
      {
        id: "latisan-film",
        type: "behance",
        title: "Latisan Videography",
        src: "https://www.behance.net/gallery/213304253/Latisan",
        thumbnail: "/projects/latisancover.png",
        sourceHref: "https://www.behance.net/gallery/213304253/Latisan",
      },
      {
        id: "edit-1",
        type: "youtube",
        title: "Agung Hapsah - Mizone Style",
        src: "https://www.youtube.com/watch?v=mhpzUPpWD8g",
        thumbnail: "/character-banner.jpg",
      },
      {
        id: "edit-2",
        type: "video",
        title: "Sarinah Bumper Video",
        src: "/projects/sarinah15sec.mp4",
        thumbnail: "/projects/sarinah15sec.mp4",
      },
      {
        id: "edit-3",
        type: "youtube",
        title: "Miami Baby - Fast Paced",
        src: "https://www.youtube.com/shorts/ndhI6YIC3d8",
        thumbnail: "/projects/rosblox.png",
      },
      {
        id: "edit-4",
        type: "youtube",
        title: "Karina - Visual Flow",
        src: "https://www.youtube.com/shorts/AqCIBMyrM8A",
        thumbnail: "/projects/phe.jpg",
      },
      {
        id: "edit-5",
        type: "instagram",
        title: "Don't Be Shy - AMV Edit",
        src: "https://www.instagram.com/axchiil/reel/CLOoN_aAyqU/",
        thumbnail: "/character-banner.jpg",
      },
      {
        id: "edit-6",
        type: "instagram",
        title: "Hate it When U See Me",
        src: "https://www.instagram.com/axchiil/reel/CGEgYfUgB5I/",
        thumbnail: "/projects/motion-reel.jpg",
      },
    ],
  },
  {
    slug: "design",
    label: "Design",
    title: "Design",
    summary:
      "Static design showcase for layout, poster, key visual, and presentation frames.",
    accent:
      "linear-gradient(135deg, rgba(95, 84, 196, 0.38), rgba(19, 17, 51, 0.92)), radial-gradient(circle at 50% 80%, rgba(186, 195, 255, 0.22), transparent 40%)",
    detailTagline: "Still Works",
    description:
      "A gallery of static design work for posters, boards, character sheets, and visual presentation assets.",
    media: [
      {
        id: "ds-1",
        type: "video",
        title: "Kinetic Typography Buka Ruang : HajaTan",
        src: "/projects/hajatan.mp4",
        thumbnail: "/projects/hajatan.mp4",
      },
      {
        id: "ds-2",
        type: "image",
        title: "Banner - Digital Advertising KliKFilm",
        src: "/projects/rosblox.png",
        thumbnail: "/projects/rosblox.png",
      },
      {
        id: "ds-3",
        type: "image",
        title: "Book Cover Design",
        src: "/projects/motion-reel.jpg",
        thumbnail: "/projects/motion-reel.jpg",
      },
      {
        id: "ds-4",
        type: "image",
        title: "Social Media Post - Askara",
        src: "/projects/phe.jpg",
        thumbnail: "/projects/phe.jpg",
      },
    ],
  },
  {
    slug: "livestreaming-event",
    label: "Livestreaming Event",
    title: "Livestreaming Event",
    summary:
      "Live broadcast production, multi-camera stream setups, on-screen overlays, and live visual management.",
    accent:
      "linear-gradient(135deg, rgba(14, 116, 144, 0.42), rgba(15, 23, 42, 0.94)), radial-gradient(circle at 70% 30%, rgba(56, 189, 248, 0.25), transparent 34%)",
    detailTagline: "Live Broadcast",
    description:
      "A curated collection of livestreaming event productions, live broadcast operations, on-screen overlays, and multi-camera event visuals.",
    media: [
      {
        id: "live-1",
        type: "youtube",
        title: "Opening Ceremony Post Human Exhibition #5 PARADISITY",
        src: "https://www.youtube.com/watch?v=CXvFmTJrQg0",
        thumbnail: "/projects/phe.jpg",
      },
      {
        id: "live-2",
        type: "youtube",
        title: "Volume Gigs : Podcast Session BLESS FROM GOD",
        src: "https://www.youtube.com/watch?v=If0YjC4801w&t=716s",
        thumbnail: "/projects/IMG_9535.PNG",
      }
    ],
  },
];

export const TERMS_OF_SERVICE: string[] = [
  "Do not claim my works as your own work.",
  "Please credit me properly.",
  "I have all the rights to decline commissions.",
  "Prices may changes ( depends on work difficulty )",
  "After we deal about the concept, i will do the work according to the concept, if there's any additional things to add or theres a change in the concept, extra fee will be charged.",
  "Rights are given to share and use this animation for a portfolio.",
  "No refunds or returns are allowed after the final product has been made.",
];

