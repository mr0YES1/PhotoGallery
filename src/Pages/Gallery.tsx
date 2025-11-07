import Header from "@/Components/Header";
import { photos } from "@/Entities/Photo";
import FilterBar from "@/Components/gallery/FilterBar";
import {useState} from "react";

export default function GalleryPage() {
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <Header photoCount={photos.length}/>

      {/* Filter Bar */}
      <FilterBar
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange}
      />

    </div>
  );
}