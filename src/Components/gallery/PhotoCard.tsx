import {useState} from 'react';
import {format} from 'date-fns';
import {motion} from 'framer-motion';
import type { Photo } from '@/Entities/Photo';

type PhotoCardProps = {
  photo: Photo;
  onClick: (photo: Photo) => void;
  index: number;
}

export default function PhotoCard({photo, onClick, index} : PhotoCardProps ) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{delay: index * 0.03, duration: 0.3}}
      className="group relative overflow-hidden cursor-pointer"
      onClick={() => onClick(photo)}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"/>
        )}
        <img 
          src={photo.image_url}
          alt={photo.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
          onLoad={() => setImageLoaded(true)}
        />

        {/* Dark overlay with text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
            <h3 className="text-white font-light text-lg tracking-wide">
              {photo.title}
            </h3>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <span>{format(new Date(photo.created_date), 'MM/dd/yyyy')}</span>
              <span>•</span>  
              <span className="capitalize">{photo.category}</span>  
            </div>  
          </div>
        </div>
      </div>
    </motion.div>
  );
}

