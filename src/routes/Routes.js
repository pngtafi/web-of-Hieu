import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../components/about/About';
import Work from '../components/work/Work';
import Career from '../components/career/Career';

// Lazy load các component
const Home = React.lazy(() => import('../components/home/Home'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Home />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/career" element={<Career />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
