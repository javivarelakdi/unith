import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Single from "./views/single";
import Gallery from "./views/gallery";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState, AppDispatch } from "./redux/index";
import { fetchImages } from "./redux/ImageReducer";

function App() {
  const dispatch: AppDispatch = useAppDispatch();
  const loading = useSelector((state: RootState) => state.image.loading);
  const error = useSelector((state: RootState) => state.image.error);
  const imageList = useSelector((state: RootState) => state.image.images);

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
      <h1>Unith</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Gallery imageList={imageList} />} />
          <Route
            path="/:index/:title"
            element={<Single imageList={imageList} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
