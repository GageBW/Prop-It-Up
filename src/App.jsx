import './App.css'
import PersonCard from './components/PersonCard';

function App() {
  return (
    <>
      <PersonCard firstName="Gabe" lastName="Wimmer" age={92} hairColor="Dirty Blonde" />
      <PersonCard firstName="Caity" lastName="Childs" age={42} hairColor="Purple" />
      <PersonCard firstName="Adam" lastName="Radage" age={22} hairColor="Gray" />
      <PersonCard firstName="Ivy" lastName="Bruh" age={102} hairColor="Red" />
    </>
  );
}

export default App