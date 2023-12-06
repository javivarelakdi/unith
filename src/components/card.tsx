import { Image } from "../redux/ImageReducer";

export default function Card({ image, title, index, description }: Image) {
  return (
    <li key={index}>
      <img src={image} alt={title} />
      <span className="overlay">{description}</span>
    </li>
  );
}
