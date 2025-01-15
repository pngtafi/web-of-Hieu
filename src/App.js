import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './routes/Routes';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<Home />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
