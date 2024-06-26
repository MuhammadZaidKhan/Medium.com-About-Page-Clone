import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import ArticlesListPage from './Pages/ArticlesListPage2';
import ArticlePage from './Pages/Article-Page';
import Navbar from './Components/Navbar';
import Bot from './Components/Bot';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Bot />
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;