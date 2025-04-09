import { useState } from 'react';
import HelloMessage from './components/HelloMessage';
import Footer from './components/Footer';

import GoodbyeMessage from './components/GoodbyeMessage';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <Footer></Footer>
      <button onClick={() => setShow(!show)}>Toggle Hello</button>
      {show && <HelloMessage />}
      <button onClick={() => setShow(!show)}>Toggle Goodbye</button>
      {show && <GoodbyeMessage />}
    </div>
    
  );
} 

export default App;
