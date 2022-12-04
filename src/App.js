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
          <div className="container my-3">
            <Home />
          </div>
        </div>
      </QuizState>
    </>
  );
}

export default App;
