import { Image } from "../redux/ImageReducer";
import { Link } from "react-router-dom";

export default function Card({
  image,
  title,
  index,
  description,
}: Readonly<Image>) {
  return (
    <li key={index}>
      <Link to={`/${index}/${title?.replaceAll(" ", "_")}`}>
        <img src={image} alt={title} />
        <span className="overlay">{description}</span>
      </Link>
    </li>
  );
}
