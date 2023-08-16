import { useState } from 'react';
import './App.css';
import icon from './assets/icon-list.svg';  
import illustration from './assets/illustration-sign-up-desktop.svg';

function App() {

  return (
    <>
      <div className='card-container'>
        <div>
        <h1 className='headline'>Stay updated!</h1>

        <h5>Join 60,000+ product managers recieving monthly updates on:</h5>
         <p><img src={icon} alt="check" /> Product discovery and building what matters</p>
         <p><img src={icon} alt="check" /> Measuring to ensure updates are a success</p>
         <p><img src={icon} alt="check" /> And much more!</p>
    

      <form>
        <p>Email address</p>
        <input placeholder="email@company.com" />
        <button>Subscribe to monthly newsletter</button>
      </form>
      </div>

      <aside>
        <img src={illustration} alt="image" />
      </aside>

      </div>
      
    </>
  )
}

export default App;
