import { Image } from "../redux/ImageReducer";
import { Link } from "react-router-dom";

export default function Card({ image, title, index, description }: Image) {
  return (
    <li key={index}>
      <Link to={`/${index}/${title?.replaceAll(" ", "")}`}>
        <img src={image} alt={title} />
        <span className="overlay">{description}</span>
      </Link>
    </li>
  );
}
