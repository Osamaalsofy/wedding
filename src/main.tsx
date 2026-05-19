import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import BookingPage from './BookingPage.tsx';
import ServicesPage from './ServicesPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<App />} />
        <Route path="/gallery" element={<App />} />
        <Route path="/contact" element={<App />} />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
);
