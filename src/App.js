import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizArea from './components/QuizArea/QuizArea';
import QuizState from './context/QuizState';

function App() {
  return (
    <>
    <QuizState>
      <div className="App">
        <NavBar />
        <QuizArea />
      </div>
    </QuizState>
    </>
  );
}

export default App;
