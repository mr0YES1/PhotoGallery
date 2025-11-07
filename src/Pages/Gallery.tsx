import Header from "@/Components/Header";
import { photos } from "@/Entities/Photo";


export default function GalleryPage() {
  return (
    <div>
      <Header photoCount={photos.length}/>
    </div>
  );
}