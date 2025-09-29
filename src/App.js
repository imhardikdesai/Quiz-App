import './App.css';
import QuizState from './context/QuizState';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Box, Spinner, Center } from '@chakra-ui/react';

const Home = lazy(() => import('./pages/Home/Home'));
const MapQuizPage = lazy(() => import('./pages/MapQuiz/MapQuizPage'));
const About = lazy(() => import('./pages/About/About'));
const ReviewAnswer = lazy(() => import('./pages/Review/ReviewAnswer'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const LoadingFallback = () => (
  <Center h="100vh" bg="rgba(33, 40, 50, 0.95)">
    <Box textAlign="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.700"
        color="blue.400"
        size="xl"
        mb={4}
      />
      <Box color="whiteAlpha.800" fontSize="lg" fontWeight="medium">
        Loading...
      </Box>
    </Box>
  </Center>
);

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
);

function App() {
  return (
    <QuizState>
      <div className="App">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/map" element={<Layout><MapQuizPage /></Layout>} />
            <Route path="/review" element={<Layout><ReviewAnswer /></Layout>} />
            <Route path="*" element={<NotFound />} /> {/* 404 page without NavBar */}
          </Routes>
        </Suspense>
      </div>
    </QuizState>
  );
}

export default App;