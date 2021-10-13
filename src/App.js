import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import './style.css';

export default function App() {
  return (
    <div className="app">
       
        {/* header */}
        <Header />
        {/* App body */}
         <div className="app__body">
           <Sidebar />
           <Feed />
         </div>
    </div>
  );
}


