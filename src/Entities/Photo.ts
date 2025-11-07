
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
        image_url: "images/street-portrait.jpg",
        category: "people",
        tags: ["portrait", "street", "candid", "urban"],
        photographer: "Emma Wilson",        
    },
];