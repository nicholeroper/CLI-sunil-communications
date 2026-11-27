import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Accessories from './pages/Accessories';
import Gallery from './pages/Gallery';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function PatchesListener() {
  useEffect(() => {
    const onPop = () => {
      const patch = sessionStorage.getItem('gp-patches');
      if (patch) {
        sessionStorage.removeItem('gp-patches');
        const { savedPath, savedHistory } = JSON.parse(patch);
        if (savedPath === window.location.pathname + window.location.search) {
          window.history.replaceState(null, '', savedPath);
          window.history.go(savedHistory - window.history.length);
        }
      }
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return null;
}

function PageTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
  return null;
}

function App() {
  useEffect(() => {
    sessionStorage.setItem(
      'gp-patches',
      JSON.stringify({
        savedPath: window.location.pathname + window.location.search,
        savedHistory: window.history.length,
      })
    );
  }, []);

  return (
    <Router>
      <PatchesListener />
      <PageTracker />
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
