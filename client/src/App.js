import { fetchUser } from './api';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchUser}>Press this button to get the user</button>
      </header>
    </div>
  );
}

export default App;
