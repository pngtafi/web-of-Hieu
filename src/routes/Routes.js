import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../components/Loading';

// Lazy load các component
const Home = React.lazy(() => import('../components/home/Home'));
const About = React.lazy(() => import('../components/about/About'));
const Work = React.lazy(() => import('../components/work/Work'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
