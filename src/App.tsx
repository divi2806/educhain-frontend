import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletContextProvider } from './components/WalletContextProvider';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Whitepaper from './pages/Whitepaper';

function App() {
  return (
    <WalletContextProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
          </Routes>
        </MainLayout>
      </Router>
    </WalletContextProvider>
  );
}

export default App;