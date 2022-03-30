import logo from './logo.svg';
import './App.css';
import { Fetch } from './component/fetch'
import { Fetch1post } from './component/fetch1post';

function App() {
  return (
    <div className="App">
      {/* <Fetch/> */}
      <Fetch1post/>
    </div>
  );
}

export default App;
