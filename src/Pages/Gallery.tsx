import {useState, useMemo} from "react";
import Header from "@/Components/Header";
import {photos, type Photo} from "@/Entities/Photo";
import FilterBar from "@/Components/gallery/FilterBar";
import PhotoGrid from "@/Components/gallery/PhotoGrid";
import PhotoModal from "@/Components/gallery/PhotoModal";

export default function GalleryPage() {
  
  // Parse URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category') || 'all';
  const initialSort = urlParams.get('sort') || '-created_date';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState(initialSort);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  // Filter and sort photos
  const filteredPhotos = useMemo(() => {
    let filtered = photos.filter(photo => {
      return selectedCategory === 'all' || photo.category === selectedCategory;
    });

    // Sort photos
    filtered.sort((a, b) => {
      if (sortOrder === '-created_date') {
        return new Date(b.created_date).getTime() - new Date(a.created_date).getTime();
      } 
      else if (sortOrder === 'created_date') {
        return new Date(a.created_date).getTime() - new Date(b.created_date).getTime();
      }
      else if (sortOrder === 'title') {
        return a.title.localeCompare(b.title);
      }
      else if (sortOrder === '-title') {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });
    
    return filtered;
  }, [photos, selectedCategory, sortOrder]); 

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (sort: string) => {
    setSortOrder(sort);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };
  
  const handleCloseModal = () => {
    setSelectedPhoto(null);
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

      {/* Photo Grid */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <PhotoGrid
          photos={filteredPhotos}
          onPhotoClick={(handlePhotoClick)}
        />
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}