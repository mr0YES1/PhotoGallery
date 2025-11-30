
type HeaderProps = {
  photoCount: number;
};

export default function Header({ photoCount }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
        
          {/* Logo & Title */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-black rounded" />
              <div className="w-3 h-3 bg-gray-400 rounded" />
              <div className="w-3 h-3 bg-gray-300 rounded" />
            </div>
            <h1 className="text-lg font-normal text-gray-900">Photo Gallery</h1>  
          </div>

        </div>  
      </div>

      {/* Stats Bar */}
      {photoCount > 0 && (
        <div className="bg-gray-50 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 py-2">
            <div className="flex items-center gap-6 text-xs text-gray-600">
              <span> {photoCount} photos</span>
              <span>•</span>
              <span> Updated daily</span>
              <span>•</span>
              <span className="text-gray-900 font-medium">Curated collection</span>
            </div>
          </div>
        </div> 
      )}

    </header>
  );
}