import { useState } from 'react';
import HelloMessage from './components/HelloMessage';
import GoodbyeMessage from './components/GoodbyeMessage';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <button onClick={() => setShow(!show)}>Toggle Hello</button>
      {show && <HelloMessage />}
      <button onClick={() => setShow(!show)}>Toggle Goodbye</button>
      {show && <GoodbyeMessage />}
    </div>
    
  );
} 

export default App;
