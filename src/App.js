// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form/Form';
import { CounterPage } from './CounterPage';

function App() {
  return (
    <div className="App"> 
      {/* <h1>React form</h1> */}
      <Form />
      <CounterPage/>
    </div>
  );
}

export default App;
