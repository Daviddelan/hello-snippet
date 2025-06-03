import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    title: "Fire Camp",
    description: "Annual summer music festival featuring top artists from around the world.",
    date: "2025-05-26",
    location: "Pentecost Convention Center, Millenium City",
    category: "Church",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748933188/Screenshot_2025-06-03_at_6.46.19_AM_vkkafe.png",
    featured: true
  },
  {
    id: "2",
    title: "Ghana Data Science Summit 2025 - IndabaX Ghana",
    description: "A 3-day hands-on conference on Data Science, Machine Learning & AI",
    date: "2025-06-18",
    location: "Ashesi University",
    category: "Cars",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748933448/Screenshot_2025-06-03_at_6.50.36_AM_pvkafn.png",
    featured: true
  },
  {
    id: "3",
    title: "Launch of the Despite Auto Museum ",
    description: "Come and experience Greatness in Accra",
    date: "2025-06-01",
    location: "East Legon, Accra",
    category: "Play",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748933697/Screenshot_2025-06-03_at_6.54.43_AM_vpxpy7.png",
    featured: true
  },
  {
    id: "4",
    title: "EDENIC WORSHIP EXPERIENCEt",
    description: "A night of uninterrupted worship and praise to God. 3 hours of non stop worship, praise and prayers; a night where we fellowship together and touch God’s heart.",
    date: "2025-06-08",
    location: "ICGC Calvary Temple",
    category: "Church",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748933849/Screenshot_2025-06-03_at_6.57.10_AM_dyse09.png",
    featured: true
  },
  {
    id: "5",
    title: "Behold Your God ‘25: A Worship And Medical Outreach",
    description: "A night of uninterrupted worship and praise to God. 3 hours of non stop worship, praise and prayers; a night where we fellowship together and touch God’s heart.",
    date: "2025-06-15",
    location: "Korle Bu Teaching Hospital",
    category: "Church",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748934175/Screenshot_2025-06-03_at_7.02.29_AM_dftvlw.png"
  },
  {
    id: "6",
    title: "Invasion 2025"",
    description: "THEME: FAITH FOR EXPLOITS",
    date: "2025-06-22",
    location: "University Of Ghana Sports Stadium",
    category: "Music",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748934359/Screenshot_2025-06-03_at_7.05.49_AM_jwfkdz.png"
  },
  {
    id: "7",
    title: "CHAYIL CONFERENCE 2025",
    description: "An annual gathering of women who are fulfilling the urgency of God to be who he had ordained us to be.",
    date: "2025-09-10",
    location: "Tema, Ghana",
    category: "Conference",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748934599/Screenshot_2025-06-03_at_7.09.51_AM_xc61uv.png"
  },
  {
    id: "8",
    title: "Fire Festival",
    description: "Fire Festival is a youth revival gathering by The Oasis Collective in KNUST, igniting a generation with God’s fire through worship, teaching, and spiritual encounters.",
    date: "2025-10-05",
    location: "Evans Anfom Auditorium Complex",
    category: "Church",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748934638/Screenshot_2025-06-03_at_7.10.30_AM_kkf845.png"
  },
  {
    id: "9",
    title: "SHABACH PRAISE",
    description: "Shabach Praise is an annual youth music concert organized by the Youth Ministry of The Apostolic Church. For five years, it has united hundreds of young people and families through dynamic worship, music, and community engagem",
    date: "2025-11-15",
    location: "The Apostolic Church, Dansoman Central",
    category: "Church",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748934755/Screenshot_2025-06-03_at_7.12.23_AM_eh4kma.png"
  },
  {
    id: "10",
    title: "Tech Conference",
    description: "Exploring the future of technology with industry leaders.",
    date: "2025-12-10",
    location: "Ashesi University",
    category: "Fest",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "11",
    title: "Sports Car Rally",
    description: "Exhibition and rally of luxury sports cars.",
    date: "2026-01-20",
    location: "East Legon, Accra"",
    category: "Cars",
    image: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "12",
    title: "VALUE INVESTMENT BOOTCAMP",
    description: "TO BE DETERMINED",
    date: "2025-12-20",
    location: "Ashesi University",
    category: "Conference",
    image: "Unlock the Secret of investments; company valuation, stock selection and portfolio development with Dr. Emmanuel Kingsford Owusu"
  }
];

export const getAllEvents = () => events;

export const getFeaturedEvents = () => events.filter(event => event.featured);

export const getEventsByCategory = (category: string) => {
  if (category === 'All') return events;
  return events.filter(event => event.category === category);
};

export const getEventById = (id: string) => events.find(event => event.id === id);