import './App.css';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import MapQuizPage from './pages/MapQuiz/MapQuizPage';
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';
import NotFound from './pages/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

// Layout component to include NavBar only on selected pages
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
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/map" element={<Layout><MapQuizPage /></Layout>} />
          <Route path="/review" element={<Layout><ReviewAnswer /></Layout>} />
          <Route path="*" element={<NotFound />} /> {/* 404 page without NavBar */}
        </Routes>
      </div>
    </QuizState>
  );
}

export default App;
