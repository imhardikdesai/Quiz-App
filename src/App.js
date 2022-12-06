import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import Scoreboard from './pages/ScoreBoard/Scoreboard.jsx';

function App() {

  return (
    <>
      <QuizState>
        <div className="App">
          <NavBar />
          <Scoreboard />
          {/* <Home /> */}
        </div>
      </QuizState>
    </>
  );
}

export default App;
