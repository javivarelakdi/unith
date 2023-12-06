import { Image } from "../redux/ImageReducer";
import Card from "../components/card";
export type GalleryProps = { imageList: Image[] };
export default function Gallery({ imageList }: GalleryProps) {
  return (
    <ul className="image-gallery">
      {imageList.map((el: Image) => (
        <Card
          key={el.index}
          image={el.image}
          title={el.title}
          index={el.index}
          description={el.description}
        />
      ))}
    </ul>
  );
}
