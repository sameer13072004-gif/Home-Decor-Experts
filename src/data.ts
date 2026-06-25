export interface PortfolioItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string; // Lucide icon name
}

export interface TrustPillar {
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const BUSINESS_INFO = {
  name: "Home Decor Experts",
  tagline: "Premium Carpentry & Bespoke Woodwork",
  logoUrl: "https://renowix.in/wp-content/uploads/2026/06/file_000000003f7c7208a036d59c5c3dd127.png",
  phone: "7466939076",
  phoneFormatted: "+91-7466939076",
  whatsappUrl: "https://wa.me/917466939076?text=Hi%20Home%20Decor%20Experts!%20I%20would%20like%20to%20get%20a%20quote%20for%20premium%20woodwork/carpentry.",
  areas: ["Noida", "Greater Noida", "Ghaziabad", "Delhi NCR"],
  accentColor: "#C5A059",
  primaryBg: "#1F1F1F"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "furniture-wardrobes",
    title: "Custom Furniture & Wardrobes",
    description: "Tailor-made closets, elegant walk-in wardrobes, beds, and study desks designed with space-saving layouts and flawless premium finishes.",
    features: ["Hettich & Blum soft-close fittings", "Waterproof plywood & wood veneers", "Custom internal storage organization"],
    icon: "Armchair"
  },
  {
    id: "modular-kitchens",
    title: "Modular Kitchen Installation",
    description: "Ergonomic, modern cooking spaces featuring customized pull-out drawers, premium laminates, high-end hardware, and seamless profiles.",
    features: ["Aesthetic acrylic & PU finishes", "Corian or Quartz counter integrations", "Smart corner organizer setups"],
    icon: "ChefHat"
  },
  {
    id: "flooring-paneling",
    title: "Wooden Flooring & Wall Paneling",
    description: "Transform plain walls and cold floors into inviting masterpieces using high-density wooden planks, luxury fluted panels, and custom TV backdrops.",
    features: ["Engineered hardwood & laminate options", "Sound-dampening fluted panels", "Precise floor leveling & underlayments"],
    icon: "Layers"
  },
  {
    id: "home-renovation",
    title: "Full-Home Renovation & Repair",
    description: "Complete overhaul of old woodwork, door repairs, lock installations, and structural enhancements executed with absolute attention to detail.",
    features: ["Professional on-site carpentry crews", "Structural and hardware replacements", "Flawless wood polishing & restoration"],
    icon: "Wrench"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "vid-1",
    type: "video",
    url: "https://renowix.in/wp-content/uploads/2026/06/lv_0_20260625113022.mp4",
    title: "Artisanal Craftsmanship in Action",
    category: "Bespoke Fittings",
    description: "Witness the fine detailing and precision joinery of our team hand-crafting furniture."
  },
  {
    id: "vid-2",
    type: "video",
    url: "https://renowix.in/wp-content/uploads/2026/06/lv_0_20260625113147.mp4",
    title: "Modern Wardrobe & Panel Inspection",
    category: "Wardrobes & Cabinets",
    description: "A walkthrough of a custom luxury bedroom wardrobe featuring soft-closing profile doors."
  },
  {
    id: "vid-3",
    type: "video",
    url: "https://renowix.in/wp-content/uploads/2026/06/lv_0_20260625113223.mp4",
    title: "Premium Kitchen Handover Tour",
    category: "Modular Kitchens",
    description: "Tour of a modular kitchen showing soft-close tandem boxes and pull-out trays."
  },
  {
    id: "img-1",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0027.jpg",
    title: "Luxury Living Room Wall Paneling",
    category: "Living Room Woodwork",
    description: "Flawless geometric wooden veneer paneling integrated with ambient warm backlighting."
  },
  {
    id: "img-2",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0035.jpg",
    title: "High-Gloss Modern Kitchen Cabinets",
    category: "Modular Kitchens",
    description: "Sleek and bright overhead storage cabinetry designed for optimal ergonomics."
  },
  {
    id: "img-3",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0029.jpg",
    title: "Bespoke Wooden Display Credenza",
    category: "Living Room Woodwork",
    description: "Fine glass panels framed by premium polished walnut wood for displays."
  },
  {
    id: "img-4",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0023.jpg",
    title: "Premium Luxury Walk-in Closet",
    category: "Wardrobes & Cabinets",
    description: "Built-in vanity area with smart storage compartments and profile warm lighting."
  },
  {
    id: "img-5",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0031.jpg",
    title: "Warm Walnut Veneer Wardrobe",
    category: "Wardrobes & Cabinets",
    description: "Floor-to-ceiling wooden wardrobe featuring custom brass accents."
  },
  {
    id: "img-6",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0024.jpg",
    title: "Teak Finish Modular Storage Unit",
    category: "Bespoke Fittings",
    description: "Rich teak textures with geometric modern handles for storage."
  },
  {
    id: "img-7",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0037.jpg",
    title: "Seamless Modular TV Console",
    category: "Living Room Woodwork",
    description: "A gorgeous wall-mounted TV console unit with integrated storage and wood veneer backing."
  },
  {
    id: "img-8",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0034.jpg",
    title: "Custom Wooden Main Entry Door",
    category: "Bespoke Fittings",
    description: "Solid wood heavy door design with modern carvings and premium security lock fittings."
  },
  {
    id: "img-9",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0021.jpg",
    title: "Solid Hardwood Staircase & Balusters",
    category: "Wooden Flooring",
    description: "Warm teak wood treads and matching solid wood railings crafted to perfection."
  },
  {
    id: "img-10",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0032.jpg",
    title: "Modern Wooden False Ceiling Grid",
    category: "Living Room Woodwork",
    description: "Elegant wooden rafters and recessed LED spotlights for high-end modern ceiling design."
  },
  {
    id: "img-11",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0022.jpg",
    title: "Minimalist Floating Study Desk",
    category: "Bespoke Fittings",
    description: "Sleek and clean oak desk floating unit with a magnetic task board integration."
  },
  {
    id: "img-12",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0038.jpg",
    title: "Solid Oak Partition Screen",
    category: "Living Room Woodwork",
    description: "A gorgeous divider structure designed with rotating louvers for customizable privacy."
  },
  {
    id: "img-13",
    type: "image",
    url: "https://renowix.in/wp-content/uploads/2026/06/IMG-20260623-WA0036.jpg",
    title: "Premium Wooden Flooring",
    category: "Wooden Flooring",
    description: "Matte-finished, water-resistant parquet flooring installed with seamless expansion joints."
  }
];

export const TRUST_PILLARS: TrustPillar[] = [
  {
    title: "100% Transparent Pricing",
    description: "No hidden charges, no surprise markups. You get a fully itemized material-and-labor breakdown with absolute clarity before we start.",
    icon: "Scale"
  },
  {
    title: "Premium Materials Only",
    description: "We use marine-grade waterproof plywood, genuine hardwood veneers, and premium hardware brands like Hettich, Blum, and Hafele.",
    icon: "Award"
  },
  {
    title: "Timely Project Completion",
    description: "We work on strict timelines. Every wardrobe, modular kitchen, and flooring project is handed over right on schedule.",
    icon: "Calendar"
  }
];

export const CUSTOMER_REVIEWS = [
  {
    name: "Aman Sharma",
    location: "Sector 137, Noida",
    review: "The wardrobes and modular kitchen designed by Home Decor Experts transformed our apartment. 100% transparent pricing and excellent finish!",
    rating: 5,
    project: "Full-Home Woodwork"
  },
  {
    name: "Ritu Goel",
    location: "Indirapuram, Ghaziabad",
    review: "Highly professional woodwork. They built a custom TV panel and wood rafters for our ceiling. No mess left behind, incredibly punctual.",
    rating: 5,
    project: "Living Room Wall Paneling"
  },
  {
    name: "Vikram Malhotra",
    location: "Alpha 2, Greater Noida",
    review: "Extremely reliable carpenters. Their custom study tables and beds are sturdy and have a very premium, high-end feel. Strongly recommend!",
    rating: 5,
    project: "Custom Furniture"
  }
];
