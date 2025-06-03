import { Event } from "@/types";

export const events: Event[] = [
  {
    id: "1",
    title: "Summer Music Festival",
    description: "Annual summer music festival featuring top artists from around the world.",
    date: "2025-07-15",
    location: "Central Park",
    category: "Music",
    image: "https://res.cloudinary.com/dt3xctihn/image/upload/v1748933188/Screenshot_2025-06-03_at_6.46.19_AM_vkkafe.png",
    featured: true
  },
  {
    id: "2",
    title: "Vintage Car Show",
    description: "Exhibition of classic and vintage cars from the 1950s to 1980s.",
    date: "2025-08-10",
    location: "Convention Center",
    category: "Cars",
    image: "https://images.pexels.com/photos/5194449/pexels-photo-5194449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: "3",
    title: "Shakespeare in the Park",
    description: "Open-air theater performance of Shakespeare's most famous plays.",
    date: "2025-06-20",
    location: "Botanical Gardens",
    category: "Play",
    image: "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: "4",
    title: "Gospel Choir Concert",
    description: "An evening of uplifting gospel music performed by the city's best choir.",
    date: "2025-09-05",
    location: "Grand Cathedral",
    category: "Church",
    image: "https://images.pexels.com/photos/8047014/pexels-photo-8047014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: "5",
    title: "Food & Wine Festival",
    description: "Celebrate culinary excellence with gourmet food and fine wines.",
    date: "2025-07-25",
    location: "Riverfront Park",
    category: "Fest",
    image: "https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "6",
    title: "Electronic Dance Night",
    description: "Night of electronic music with world-renowned DJs.",
    date: "2025-08-15",
    location: "Nightclub XYZ",
    category: "Music",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "7",
    title: "Summer End Party",
    description: "Celebrate the end of summer with food, drinks, and live music.",
    date: "2025-09-10",
    location: "Beach Resort",
    category: "Party",
    image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "8",
    title: "Opera Night",
    description: "A magical evening of classical opera performances.",
    date: "2025-10-05",
    location: "Opera House",
    category: "Play",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "9",
    title: "Charity Gala",
    description: "Annual charity event raising funds for children's education.",
    date: "2025-11-15",
    location: "Grand Hotel",
    category: "Party",
    image: "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "10",
    title: "Tech Conference",
    description: "Exploring the future of technology with industry leaders.",
    date: "2025-12-10",
    location: "Tech Campus",
    category: "Fest",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "11",
    title: "Sports Car Rally",
    description: "Exhibition and rally of luxury sports cars.",
    date: "2026-01-20",
    location: "Race Track",
    category: "Cars",
    image: "https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "12",
    title: "Christmas Carol Concert",
    description: "Traditional Christmas carols performed by local choirs.",
    date: "2025-12-20",
    location: "Community Church",
    category: "Church",
    image: "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const getAllEvents = () => events;

export const getFeaturedEvents = () => events.filter(event => event.featured);

export const getEventsByCategory = (category: string) => {
  if (category === 'All') return events;
  return events.filter(event => event.category === category);
};

export const getEventById = (id: string) => events.find(event => event.id === id);