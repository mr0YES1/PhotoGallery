import PhotoCard from "./PhotoCard";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import type { Photo } from "../../Entities/Photo";

type PhotoGridProps = {
  photos: Photo[];
  onPhotoClick: (photo: Photo) => void;
}

export default function PhotoGrid({photos, onPhotoClick} : PhotoGridProps) {
  
    if(photos.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-32 px-4"
        >
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <ImageOff className="w-8 h-8 text-gray-400"/>
          </div>
          <h3 className="text-xl font-light text-gray-900 mb-2">No photos found</h3>
          <p className="text-gray-500 text-sm text-center max-w-md">
            Try adjusting your filters to discover more photos.
          </p>
        </motion.div> 
      );
    }
    
   return ( 
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {photos.map((photo, index) => (
        <div key={photo.id} className="break-inside-avoid"> 
          <PhotoCard
            photo={photo}
            onClick={onPhotoClick}
            index={index}
          />
        </div>
      ))}
    </div>
  );
  
}