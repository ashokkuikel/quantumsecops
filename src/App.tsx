import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;