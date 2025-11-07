import { Button } from "./ui/button";
import { Search, Upload } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        
          {/* Logo & Title */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-black rounded-sm" />
              <div className="w-3 h-3 bg-gray-400 rounded-sm" />
              <div className="w-3 h-3 bg-gray-300 rounded-sm" />
            </div>
            <h1 className="text-lg font-normal text-gray-900">Photo Gallery</h1>  
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Button 
              variant="ghost" 
              className="text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            >
              Competitions
            </Button>
            <Button 
              variant="ghost" 
              className="text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            >
              Articles
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            >
              Member Work
            </Button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            > 
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <div className="h-6 w-px bg-gray-200 hidden sm:block" />
            <Button 
              variant="ghost"
              size="sm"
              className="text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            >
              Sign In
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              className="text-sm font-normal text-gray-700 hover:text-black hover:bg-gray-50"
            >
              Become a Member
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-gray-700 hover:text-black hover:bg-gray-50"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>  
      </div>
    </header>
  );
}