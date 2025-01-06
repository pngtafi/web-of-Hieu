import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './routes/Routes';
import Loading from './components/Loading';  // Tạo một component Loading hiển thị khi đang tải
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
