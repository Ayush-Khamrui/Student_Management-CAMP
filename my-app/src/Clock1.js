
import { useState } from 'react';
import './Clock.css';
import { Clock } from './components/Clock';

function Clock1() {

  const [message, setMessage] = useState(null);

  return (
   
      <Clock />

    
  );
}

export default Clock1;
