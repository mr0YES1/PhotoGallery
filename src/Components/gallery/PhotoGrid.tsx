
export default function PhotoGrid({photos, onPhotoClick}) {
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