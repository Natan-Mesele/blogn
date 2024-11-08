import './Component/i18n';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './Component/BlogList';  // Import BlogList component
import BlogDetail from './Component/BlogDetail';  // Import BlogDetail component
import Header from './Component/Header';  // Import Header component
import Hero from './Component/Hero';  // Import Hero component
import Footer from './Component/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Hero /><BlogList /></>} />
        <Route path="/blog/:id" element={<BlogDetail />} />  {/* Blog detail page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
