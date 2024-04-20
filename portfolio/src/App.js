import './App.css';
import { Slidebar } from './components/Slidebar';
import { Base } from './components/Base';
import React from 'react';


export function App() {
  return (
    <div className='flex-auto'>
      <Slidebar></Slidebar>
      <Base></Base>
    </div>
  );
}

export default App;
