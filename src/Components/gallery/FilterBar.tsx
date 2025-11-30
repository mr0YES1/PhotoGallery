import {motion, AnimatePresence} from "framer-motion";
import { Button } from "@/Components/ui/button";
import { 
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent
} from "@/Components/ui/select";
import { useState } from "react";

const categories = [
  { id: 'all', label: 'All' },
  { id: 'nature', label: 'Nature' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'people', label: 'People' },
  { id: 'abstract', label: 'Abstract' },
  { id: 'travel', label: 'Travel' },
  { id: 'food', label: 'Food' }
];

type FilterBarProps = {
  selectedCategory: string;
  sortOrder: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
};

export default function FilterBar({
  selectedCategory,
  sortOrder,
  onCategoryChange,
  onSortChange
}: FilterBarProps) {
  
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        
        {/* Mobile filter button */}
        <div className="flex md:hidden justify-start">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setMobileOpen(true)}
          >
            Filters
          </Button>
        </div>
        
        <div className="hidden md:flex items-center justify-between">

          {/* Left side - Category filters */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">Show:</span>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => onCategoryChange(category.id)}
                  className={`rounded-full px-4 py-1 text-sm transition-all ${
                    selectedCategory === category.id 
                    ? 'bg-black text-white hover:bg-black/90' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </Button> 
              ))}
            </div>    
          </div>

          {/* Right side - Sort dropdown */}
          <div className="flex items-center gap-3">
            <Select value={sortOrder} onValueChange={onSortChange}>
              <SelectTrigger className="w-[180px] border-0 bg-transparent text-sm">
                <SelectValue/>  
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="-created_date">Most Recent</SelectItem>
                  <SelectItem value="created_date">Oldest First</SelectItem>
                  <SelectItem value="title">Title (A-Z)</SelectItem>
                  <SelectItem value="-title">Title (Z-A)</SelectItem>
                </SelectContent>  
            </Select>
          </div>

        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex justify-center items-start"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-[600px] bg-white rounded-b-xl shadow-xl p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Filters</h2>
                <Button variant="ghost" size="sm" onClick={() => setMobileOpen(false)}>
                  Close
                </Button>
              </div>

              {/* Categories */}
              <div className="space-y-3 mb-6">
                <p className="text-sm text-gray-600">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant={selectedCategory === cat.id ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                      onClick={() => onCategoryChange(cat.id)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Sort by</p>
                <Select value={sortOrder} onValueChange={onSortChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="-created_date">Most Recent</SelectItem>
                    <SelectItem value="created_date">Oldest First</SelectItem>
                    <SelectItem value="title">Title (A-Z)</SelectItem>
                    <SelectItem value="-title">Title (Z-A)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    onCategoryChange("all");
                    onSortChange("-created_date");
                  }}
                >
                  Reset
                </Button>

                <Button
                  className="flex-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}