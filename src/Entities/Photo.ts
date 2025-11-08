
export type Photo = {
    title: string;
    description?: string;
    image_url: string;
    category: 'nature' | 'architecture' | 'people' | 'abstract' | 'travel' | 'food';
    tags: string[];
    photographer?: string;
};

export const photos: Photo[] = [
    {
        title: "Street Portrait",
        description: "Candid moment captured in the city",
        image_url: "images/StreetPortrait.jpg",
        category: "people",
        tags: ["portrait", "street", "candid", "urban"],
        photographer: "Emma Wilson",        
    },
    {
        title: "City Skyline",
        description: "Urban landscape at dusk",
        image_url: "images/CitySkyline.jpg",
        category: "architecture",
        tags: ["city", "skyline", "dusk", "urban"],
        photographer: "Rachel Kim", 
    },
    {
        title: "Fresh Sushi",
        description: "Traditional Japanese sushi platter",
        image_url: "images/FreshSushi.jpg",
        category: "food",
        tags: ["sushi", "japanese", "seafood", "fresh"],
        photographer: "Yuki Tanaka", 
    },
    {
        title: "Liquid Gold",
        description: "Abstract golden liquid patterns",
        image_url: "images/LiquidGold.jpg",
        category: "abstract",
        tags: ["gold", "liquid", "abstract", "luxury"],
        photographer: "Oliver Gold", 
    },
    {
        title: "Tropical Paradise",
        description: "Crystal clear waters and palm trees",
        image_url: "images/TropicalParadise.jpg",
        category: "travel",
        tags: ["beach", "tropical", "vacation", "ocean"],
        photographer: "David Park", 
    },
    {
        title: "Yoga Session",
        description: "Peaceful meditation by the water",
        image_url: "images/YogaSession.jpg",
        category: "people",
        tags: ["yoga", "meditation", "wellness", "peaceful"],
        photographer: "Nina Patel", 
    },
    {
        title: "Modern Architecture",
        description: "Clean lines and geometric patterns in contemporary design",
        image_url: "images/ModernArchitecture.jpg",
        category: "architecture",
        tags: ["modern", "building", "geometric", "urban"],
        photographer: "Mike Johnson", 
    },
    {
        title: "Forest Trail",
        description: "Sunlight filtering through tall trees",
        image_url: "images/ForestTrail.jpg",
        category: "nature",
        tags: ["forest", "trees", "hiking", "sunlight"],
        photographer: "Tom Anderson", 
    },
    {
        title: "Watercolor Dreams",
        description: "Abstract watercolor blending",
        image_url: "images/WatercolorDreams.jpg",
        category: "abstract",
        tags: ["watercolor", "art", "colorful", "creative"],
        photographer: "Jordan Lee", 
    },
    {
        title: "Ocean Waves",
        description: "Powerful waves crashing on rocks",
        image_url: "images/OceanWaves.jpg",
        category: "nature",
        tags: ["ocean", "waves", "seascape", "dramatic"],
        photographer: "Chris Ocean", 
    },
    {
        title: "Gourmet Dish",
        description: "Beautifully plated fine dining experience",
        image_url: "images/GourmetDish.jpg",
        category: "food",
        tags: ["fine-dining", "gourmet", "plating", "restaurant"],
        photographer: "Lisa Martinez", 
    },
    {
        title: "Mountain Sunrise",
        description: "Golden hour over snow-capped peaks",
        image_url: "images/MountainSunrise.jpg",
        category: "nature",
        tags: ["mountains", "sunrise", "landscape", "golden-hour"],
        photographer: "Sarah Chen", 
    },
    {
        title: "Abstract Patterns",
        description: "Colorful swirls and shapes in motion",
        image_url: "images/AbstractPatterns.jpg",
        category: "abstract",
        tags: ["colorful", "patterns", "art", "creative"],
        photographer: "Alex Rivera", 
    },
    {
        title: "Glass Building",
        description: "Reflective modern office building",
        image_url: "images/GlassBuilding.jpg",
        category: "architecture",
        tags: ["glass", "modern", "reflection", "office"],
        photographer: "Amanda Foster", 
    },
    {
        title: "Ancient Ruins",
        description: "Historic architecture in Greece",
        image_url: "images/AncientRuins.jpg",
        category: "travel",
        tags: ["historic", "ruins", "greece", "ancient"],
        photographer: "Marco Santos", 
    },
    {
        title: "Family Portrait",
        description: "Joyful family moment outdoors",
        image_url: "images/FamilyPortrait.jpg",
        category: "people",
        tags: ["family", "outdoor", "happiness", "portrait"],
        photographer: "Sophie Brown", 
    }, 
];