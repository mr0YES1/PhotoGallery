
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
];