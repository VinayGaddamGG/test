import { useState } from 'react';
import HelloMessage from './components/HelloMessage';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <button onClick={() => setShow(!show)}>Toggle Hello</button>
      {show && <HelloMessage />}
    </div>
  );
} 

export default App;
