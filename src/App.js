import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import AppRoutes from './routes/Routes';
import { Suspense } from 'react';
import Loading from './components/Loading';  // Tạo một component Loading hiển thị khi đang tải
import Footer from './components/footer/Footer';

class App extends React.Component {
  render() {
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
}

export default App;
