import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Post from './Post/Post';
import Header from './components/Header/Header';
import NewsPage from './components/NewsPage/NewsPage';
import AllNews from './components/AllNews/AllNews';
import AllInt from './components/AllInt/AllInt';
import AllSports from './components/AllSports/AllSports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/:id" element={<NewsPage />} />
          <Route path="/politics" element={<AllNews />} />
          <Route path="/international" element={<AllInt />} />
          <Route path="/sports" element={<AllSports />} />
          <Route path="post" element={<Post />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
