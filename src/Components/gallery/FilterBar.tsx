import { Button } from "@/Components/ui/button";
import { 
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent
} from "@/Components/ui/select";

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
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

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
    </div>
  );
}