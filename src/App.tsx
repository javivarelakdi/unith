import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { fetchImages, Image } from "./redux/ImageReducer";

// const text = [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, id aliquet ligula laoreet id. In aliquam hendrerit mauris, at sagittis tortor efficitur non. Proin egestas facilisis augue.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, i",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, id aliquet ligula laoreet id. In aliquam hendrerit mauris, at sagittis tortor efficitur non. Proin egestas facilisis augue. Sed aliquet maximus tempus. Nullam ornare efficitur blandit. Sed eu mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, id aliquet ligula laoreet id. In aliquam hendrerit mauris, at sagittis tortor efficitur non. Proin egestas facilisis augue. Sed aliquet maximus tempus. Nullam ornare efficitur blandit. Sed eu mattis tortor",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, i",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempor ante ligula, i",
// ];

// const images = [
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
//   "https://angular.io/assets/images/logos/angular/angular.png",
//   "https://angular.io/assets/images/logos/angular/angular.png",
//   "https://angular.io/assets/images/logos/angular/angular.png",
// ];

// const titles = ["imagen", "imagen 2", "imagen 3", "imagen 4", "imagen 5"];

function App() {
  // const [data, setData] = useState([1, 2, 3, 4, 5]);

  const dispatch: AppDispatch = useAppDispatch();
  const imageList = useSelector((state: RootState) => state.image.images);
  const loading = useSelector((state: RootState) => state.image.loading);
  const error = useSelector((state: RootState) => state.image.error);
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Unith Test</h1>
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
    </div>
  );
}

export default App;
