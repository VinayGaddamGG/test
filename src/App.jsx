import { useState } from 'react';
import HelloMessage from './components/HelloMessage';
import Footer from './components/Footer';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <Footer></Footer>
      <button onClick={() => setShow(!show)}>Toggle Hello</button>
      {show && <HelloMessage />}
    </div>
  );
} 

export default App;
