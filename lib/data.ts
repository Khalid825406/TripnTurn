export type Destination = {
  name: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
};

export const destinations: Destination[] = [
  {
    name: "Rajasthan",
    tagline: "Royal Heritage",
    description:
      "Palaces, forts and desert evenings — the land of kings, colours and timeless stories.",
    image: "/images/destination-rajasthan.jpg",
    alt: "Udaipur City Palace glowing at sunset on Lake Pichola, Rajasthan",
  },
  {
    name: "Vietnam",
    tagline: "Islands & Karsts",
    description:
      "Emerald bays, lantern-lit streets and the tropical calm of Phu Quoc island.",
    image: "/images/destination-vietnam.jpg",
    alt: "Limestone karsts rising from emerald water in Ha Long Bay, Vietnam",
  },
  {
    name: "Goa",
    tagline: "Sun, Sand & Susegad",
    description:
      "Golden beaches, Portuguese lanes and unhurried sunsets on the Konkan coast.",
    image: "/images/destination-goa.jpg",
    alt: "Palm-lined Goan beach at golden hour with gentle waves",
  },
  {
    name: "Kashmir",
    tagline: "Paradise on Earth",
    description:
      "Dal Lake shikara rides, Mughal gardens and snow-dusted Himalayan horizons.",
    image: "/images/destination-kashmir.jpg",
    alt: "Colourful shikara boats resting on Dal Lake, Srinagar, Kashmir",
  },
  {
    name: "Dubai",
    tagline: "City of Gold",
    description:
      "Sky-piercing towers, desert safaris and world-class shopping and dining.",
    image: "/images/destination-dubai.jpg",
    alt: "Dubai skyline at night with Burj Khalifa and illuminated highways",
  },
  {
    name: "Thailand",
    tagline: "Smiles & Shores",
    description:
      "Turquoise bays, longtail boats, street food and island-hopping adventures.",
    image: "/images/destination-thailand.jpg",
    alt: "Longtail boat on a turquoise Thai beach framed by palm trees",
  },
];

export type TravelPackage = {
  slug: string;
  name: string;
  category: "International" | "Domestic";
  duration: string;
  itinerary: string;
  summary: string;
  highlights: string[];
  image: string;
  alt: string;
  badge?: string;
  indicativePrice?: string;
  priceNote?: string;
};

export const packages: TravelPackage[] = [
  {
    slug: "vietnam-with-phu-quoc",
    name: "Vietnam With Phu Quoc Island",
    category: "International",
    duration: "Island & city escape",
    itinerary: "Hanoi · Ha Long Bay · Phu Quoc",
    summary:
      "A curated Vietnam journey pairing the limestone wonder of Ha Long Bay with laid-back island days on Phu Quoc — sightseeing, beach time and comfortable hotel stays woven into one seamless trip.",
    highlights: [
      "Ha Long Bay cruise among limestone karsts",
      "Relaxing beach days on Phu Quoc island",
      "City sightseeing and local food experiences",
      "Hotel accommodation with assisted transfers",
    ],
    image: "/images/package-vietnam.jpg",
    alt: "Palm-fringed turquoise beach on Phu Quoc island, Vietnam",
    badge: "Most Loved International",
  },
  {
    slug: "rajasthan-royal-escape",
    name: "Rajasthan Royal Escape",
    category: "Domestic",
    duration: "Heritage circuit",
    itinerary: "Udaipur · Kumbhalgarh · Rajasthan sightseeing",
    summary:
      "Walk through the royal heart of Rajasthan — lake palaces, mighty fort walls and cultural evenings. Palace visits, heritage walks and scenic Aravalli drives, personalised to your pace.",
    highlights: [
      "Udaipur lake palaces and old-city lanes",
      "The great walls of Kumbhalgarh fort",
      "Cultural performances and local cuisine",
      "Scenic drives through the Aravalli hills",
    ],
    image: "/images/package-rajasthan.jpg",
    alt: "Lake Palace of Udaipur reflecting on Lake Pichola at dusk",
    badge: "Heritage Favourite",
  },
  {
    slug: "diwali-in-rajasthan",
    name: "Diwali in Rajasthan",
    category: "Domestic",
    duration: "04 Nights / 05 Days",
    itinerary: "Udaipur — 2 nights · Kumbhalgarh — 2 nights",
    summary:
      "Celebrate the festival of lights amid royal Rajasthan — illuminated palaces, festive streets and warm family moments, arranged end to end by our team.",
    highlights: [
      "Festive Udaipur evenings by the lakes",
      "Kumbhalgarh fort and countryside",
      "Family-friendly pacing with private transfers",
      "Personalised Diwali dining and celebration add-ons",
    ],
    image: "/images/package-diwali.jpg",
    alt: "Kumbhalgarh fort and its long ramparts on an Aravalli hill",
    badge: "Festival Special",
    indicativePrice: "₹21,000 – ₹24,000",
    priceNote:
      "Indicative per-couple price range as shown on our promotional poster (₹24,000 for 2 travellers, ₹22,000 for 4, ₹21,000 for 6). Please request a fresh quote for current rates and inclusions.",
  },
];

export type Service = {
  title: string;
  description: string;
  icon:
    | "map"
    | "globe"
    | "hotel"
    | "plane"
    | "car"
    | "heart";
};

export const services: Service[] = [
  {
    title: "Domestic Tour Packages",
    description:
      "Handcrafted India holidays — Rajasthan, Kashmir, Goa and beyond, planned around your pace.",
    icon: "map",
  },
  {
    title: "International Tour Packages",
    description:
      "Vietnam, Thailand, Dubai and more, with visas, itineraries and stays coordinated for you.",
    icon: "globe",
  },
  {
    title: "Hotel Reservations",
    description:
      "From boutique havelis to beachfront resorts, we book stays that match your budget and style.",
    icon: "hotel",
  },
  {
    title: "Flight Bookings",
    description:
      "Convenient flight options for domestic and international routes, aligned with your itinerary.",
    icon: "plane",
  },
  {
    title: "Airport Transfers",
    description:
      "Reliable pickups and drops, so every arrival and departure feels effortless.",
    icon: "car",
  },
  {
    title: "Honeymoon, Family & Group Tours",
    description:
      "Thoughtfully paced holidays for couples, families and groups — celebrations included.",
    icon: "heart",
  },
];

export const whyChoose = [
  {
    title: "Personalised itineraries",
    text: "Every trip is shaped around your interests, dates and travel style — never off-the-shelf.",
  },
  {
    title: "Domestic & international assistance",
    text: "One team to plan your journey, wherever in the world it takes you.",
  },
  {
    title: "Hotels, flights & transfers coordinated",
    text: "Stays, flights and ground transport arranged together, so nothing is left to chance.",
  },
  {
    title: "For couples, families & groups",
    text: "Honeymoons, family holidays and group tours — each planned with the right rhythm.",
  },
  {
    title: "Friendly trip-planning support",
    text: "Real conversations while we plan — questions welcome at every step.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Tell Us Your Dream Destination",
    text: "Share where you want to go, when, and who you are travelling with.",
  },
  {
    step: "02",
    title: "Choose Your Ideal Holiday",
    text: "Pick from curated packages or let us suggest routes that fit you.",
  },
  {
    step: "03",
    title: "Personalise Your Itinerary",
    text: "We fine-tune stays, pace and experiences until it feels just right.",
  },
  {
    step: "04",
    title: "Get Ready to Explore",
    text: "Receive your travel plan, pack your bags and enjoy the journey.",
  },
];

export const inspirationTiles = [
  {
    image: "/images/destination-vietnam.jpg",
    alt: "Ha Long Bay, Vietnam",
    label: "Vietnam diaries",
    sub: "Karsts, cruises & island time",
  },
  {
    image: "/images/destination-rajasthan.jpg",
    alt: "Udaipur City Palace, Rajasthan",
    label: "Royal Rajasthan",
    sub: "Palaces, forts & festivals",
  },
  {
    image: "/images/package-diwali.jpg",
    alt: "Kumbhalgarh fort, Rajasthan",
    label: "Diwali escapes",
    sub: "Festive lights in heritage towns",
  },
  {
    image: "/images/destination-thailand.jpg",
    alt: "Thai beach with longtail boat",
    label: "Island dreaming",
    sub: "Beaches worth the flight",
  },
  {
    image: "/images/inspiration-aerial.jpg",
    alt: "Aerial view of a turquoise tropical cove",
    label: "World travel",
    sub: "Reels & routes we love",
  },
  {
    image: "/images/inspiration-longtail.jpg",
    alt: "Longtail boat on clear turquoise water",
    label: "Shoreline moods",
    sub: "Slow days by the sea",
  },
];
