import { Image } from "../redux/ImageReducer";

export default function Card({ image, title, index, description }: Image) {
  return (
    <div className="card" key={index}>
      <img src={image} className="main-image" alt={title} />
      <span className="description">{description}</span>
      <button className="button">Click</button>
    </div>
  );
}
