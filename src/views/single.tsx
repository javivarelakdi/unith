import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Image } from "../redux/ImageReducer";

export type SingleProps = { imageList: Image[] };
export default function Single({ imageList }: SingleProps) {
  const { index } = useParams();
  const selection = imageList.filter((el) => el.index.toString() === index)[0];
  return (
    <div className="single-container">
      <div className="single-header">
        <Link to="/">
          <button>go back</button>
        </Link>
        <h3>{selection?.title}</h3>
      </div>
      <img src={selection?.image} alt={selection?.title} />
    </div>
  );
}
