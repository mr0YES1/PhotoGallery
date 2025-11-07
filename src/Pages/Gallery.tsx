import Header from "@/Components/Header";
import { photos } from "@/Entities/Photo";
import FilterBar from "@/Components/gallery/FilterBar";
import {useState} from "react";

export default function GalleryPage() {
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  const initialSort = urlParams.get('sort') || '-created_date';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState(initialSort);
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSortOrder(sort);
  };
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* Header */}
      <Header photoCount={photos.length}/>

      {/* Filter Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        sortOrder={sortOrder} 
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />

    </div>
  );
}