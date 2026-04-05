import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SubNav from './components/SubNav';
import StatsCounter from './components/StatsCounter';
import Identity from './components/Identity';
import History from './components/History';
import Recognitions from './components/Recognitions';
import Leadership from './components/Leadership';
import Success from './components/Success';
import Compliance from './components/Compliance';
import { Partners, Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SubNav />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <div id="stats-counter">
          <StatsCounter />
        </div>
        <div id="identity">
          <Identity />
        </div>
        <div id="milestones">
          <History />
        </div>
        <div id="academics">
          <Recognitions />
        </div>
        <div id="leadership">
          <Leadership />
        </div>
        <div id="success">
          <Success />
        </div>
        <div id="compliance">
          <Compliance />
        </div>
        <div id="partners">
          <Partners />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
