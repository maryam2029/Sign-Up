import SignUp from './SignUp'
import { useState } from 'react';

function App() {
    const [email, setEmail] = useState("");
  return (
    <div> 
  <SignUp email={email} setEmail={setEmail}  />
    </div>
  )
}

export default App
