import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './Component/BlogList';  // Import BlogList component
import BlogDetail from './Component/BlogDetail';  // Import BlogDetail component
import Header from './Component/Header';  // Import Header component
import Hero from './Component/Hero';  // Import Hero component
import Footer from './Component/Footer';
import About from './Navbar/About';  // Import About component
import Vision from './Navbar/Vision';  // Import Vision component
import Contact from './Navbar/Contact';  // Import Contact component
import { LanguageProvider } from './Component/LanguageContext';  // Import LanguageProvider

function App() {
  return (
    <LanguageProvider> {/* Wrap the entire application with LanguageProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<><Hero /><BlogList /></>} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />  {/* Added Vision route */}
          <Route path="/contact" element={<Contact />} />  {/* Added Contact route */}
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
