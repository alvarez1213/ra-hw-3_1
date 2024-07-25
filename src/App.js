import { Stars } from './components/Stars';

import './App.css';

function App() {
  return (
    <div className="content">
      <Stars count={1} />
      <Stars count={2} />
      <Stars count={3} />
      <Stars count={4} />
      <Stars count={5} />
    </div>
  );
}

export default App;
