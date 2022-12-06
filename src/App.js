import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';

function App() {

  return (
    <>
      <QuizState>
        <div className="App">
          <NavBar />
          <Home />
        </div>
      </QuizState>
    </>
  );
}

export default App;
