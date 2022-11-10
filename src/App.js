import ListFilms from "./components/films/ListFilms";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./components/blog/Blog";

function App() {
  return (
    <Router>
      <Routes>
			<Route path="/blog" element={<Blog/>}/>
        <Route path="/" element={<ListFilms />} />
      </Routes>
    </Router>
  );
}

export default App;
