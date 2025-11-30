import { format } from "date-fns";
import type {Photo} from "@/Entities/Photo";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import {motion, AnimatePresence} from "framer-motion";
import {X, User, Calendar, Tag} from "lucide-react";

type PhotoModalProps = {
  photo: Photo;
  onClose: () => void;
};

export default function PhotoModal({photo, onClose} : PhotoModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 30 }}
          className="relative w-auto max-w-[90vw] max-h-[90vh] bg-white overflow-auto"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white backdrop-blur-sm"
            onClick={onClose}
          >
            <X className="w-5 h-5"/>
          </Button>

          {/* Image */}
          <div className="w-full flex items-center justify-center bg-gray-100">
            <img
              src={photo.image_url}
              alt={photo.title}
              className="max-h-[75vh] max-w-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="p-8 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-3xl font-light text-gray-900 mb-2">{photo.title}</h2>
                {photo.description && (
                  <p className="text-gray-600 text-base leading-relaxed">{photo.description}</p>
                )} 
              </div>
              <Badge variant="secondary" className="bg-gray-100 text-gray-900 text-xs">
                {photo.category}  
              </Badge>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 pt-2">
              {photo.photographer && (
                <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{photo.photographer}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(photo.created_date), 'MMMM d, yyyy')}</span>    
              </div>
            </div>
            
            {photo.tags && photo.tags.length > 0 && (
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-normal text-gray-700">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {photo.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="font-normal">
                      {tag}
                    </Badge>
                  ))}  
                </div>
              </div>
            )}  
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>   
  );
}