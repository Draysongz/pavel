import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About DUROV",
    url: "#home",
  },
  {
    id: "1",
    title: "Our Utilities",
    url: "#features",
  },
  {
    id: "2",
    title: "How to Buy",
    url: "#how-to-buy",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  /* {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  }, */
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Increases Holders",
  "Targeted Marketing",
  "Engages Community",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Providing Liquidity",
    text: "With the revenue generated from our utilities, we are constantly adding liquidity to various places and requesting listings on many exchanges. DUROV will be seen everywhere.",
    date: "May 2024",
    status: "progress",
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715157787/DurovToken/blur_edges_3_jeiwdu.png",
    colorful: true,
  },
  {
    id: "1",
    title: "Developing Our Utilities",
    text: "We are constantly making progress on the development of our different utilities. These take time and will be rolled out upon completion and testing.",
    date: "May 2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Building Communities",
    text: "As much as we love our English Community, we realize there is a greater market out there for other languages and other platforms such as Weibo (The Chinese Twitter). We are currently in the process of building a Chinese and a Russian Team to help extend our reach to other communities. DUROV is global.",
    date: "May 2024",
    status: "done",
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715159978/DurovToken/blur_edges_4_plf6zp.png",
  },
  {
    id: "3",
    title: "Pending Verification",
    text: "Currently we are pending verification on TONKEEPER. We hve fulfilled the duties on our end and have submited a pull request to their github.",
    date: "May 2024",
    status: "progress",
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715158648/DurovToken/SIX_094B168D-0D8F-40F7-A1E4-75E2678C697A_ngzjgn-removebg-preview_lpaqrd.png",
  },
];

export const collabText =
  "By expanding our social medias and maximizing our reach, this allows for as many eyes on the project as possible. Our social media team is one of the best. Check for yourself!";

export const collabContent = [
  {
    id: "0",
    title: "Maximizing Reach",
    text: collabText,
  },
  {
    id: "1",
    title: "Targeting Influencers",
  },
  {
    id: "2",
    title: "Superior Content",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "X",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714975791/DurovToken/x-social-media-white-icon_mpg0hd.png",
    width: 26,
    height: 36,
    link: "https://twitter.com/Durov_Tonchain"
  },
  {
    id: "1",
    title: "Telegram",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976299/DurovToken/telegram-icon-2048x1739-6c7sghxm_zgnblt.png",
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Instagram",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976364/DurovToken/instagram-white-icon_g4l2ca.webp",
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "TikTok",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976434/DurovToken/tiktok-white-icon_chijls.webp",
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "GitHub",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976437/DurovToken/52-520535_free-files-github-github-icon-png-white_utytzt.png",
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Discord",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976529/DurovToken/discord-white-icon_uyxois.webp",
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Weibo",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714976744/DurovToken/weibo-logo-transparent_irok93.png",
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "TONKEEPER",
    description: "Download TONKEEPER",
    price: "0",
    image: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715161546/DurovToken/1200x630wa_nritp5-removebg-preview_ninvx8.png",
    href: "https://tonkeeper.com/",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715155776/DurovToken/Telegram_logo.svg_uruqcy.webp",
    features: [
      "Download the TONKEEPER app from the app store",
      "Create a wallet within TONKEEPER",
      "Fund your wallet with TON",
    ],
  },
  {
    id: "1",
    title: "STON Fi",
    description: "Connect Wallet to STON Fi",
    price: "9.99",
    image: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715156507/DurovToken/android-chrome-512x512_npklni.png",
    href: "https://app.ston.fi/swap?chartVisible=false&ft=TON&tt=STON",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715155776/DurovToken/Telegram_logo.svg_uruqcy.webp",
    features: [
      "Head to the browser section within the TONKEEPER app",
      "Find STON Fi and click on it",
      "When prompted, connect your wallet to STON Fi",
    ],
  },
  {
    id: "2",
    title: "SWAP TON TO DUROV",
    description: "Swap your TON to DUROV within STON Fi",
    price: null,
    image: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715162156/DurovToken/SIX_0EE10C36-CEF0-4CAA-AE19-D8C03BA8059A_wferrh-removebg-preview_cabcfp.png",
    href: "",
    icon: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1715231714/DurovToken/9979943_vd5uoy.png",
    features: [
      "Copy the DUROV Contract Address",
      "Paste into STON Fi",
      "Click confirm and swap your TON into DUROV",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Community Face Swap AI",
    text: "Lets users quickly generate DUROV content to help promote our token.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
  },
  {
    id: "1",
    title: "NFT Collection",
    text: "Unique collection of 1,000 DUROV NFTS that grant the ability to use our utilities at a smaller or no cost. More unique abilities coming soon for our NFT holders!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
    light: true,
  },
  {
    id: "2",
    title: "AIRDROP BOT",
    text: "Allows new tokens on the TON BLOCKCHAIN to airdrop a desired amount of tokens to the top wallets of another token; therefore, increasing their total holders.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
  },
  {
    id: "3",
    title: "Staking Platform",
    text: "UNRELEASED. Users will be able to stake their DUROV tokens and DUROV NFT's for additional rewards from the revenue generated by our utilities.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
    light: true,
  },
  {
    id: "4",
    title: "DUROV Advanced BuyBot and Trading Bot",
    text: "UNRELEASED. Developers will be able to incorporate our DUROV Advanced BuyBot with many new features into their tokens telegram group. Users will be able to trade tokens on the TON blockchain at lightning speed and little fees using our DUROV trading bot. ",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
  },
  {
    id: "5",
    title: "No KYC TON to FIAT DUROV Exchange",
    text: "Our DDE (Durov Decentralized Exchange will allow users to seamlessly exchange their TON into FIAT without having to provide identity.).",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: "https://res.cloudinary.com/dkg0dctjh/image/upload/v1714971040/DurovToken/durovNFTcover_ag9rlq.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/PavelDurovOnTon",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://twitter.com/Durov_Tonchain",
  },
];
