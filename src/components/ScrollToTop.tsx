import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isAnchorSection = pathname === '/about' || pathname === '/gallery' || pathname === '/contact';
    if (!isAnchorSection) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
