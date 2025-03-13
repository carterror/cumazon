import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../ScrollToTop';

export default function MainLayout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow mt-20">
        <div key={location.pathname} className="animate-fadeIn">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}