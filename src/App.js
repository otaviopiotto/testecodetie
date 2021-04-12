import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import LandingPage from './page/LandingPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './index.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <LandingPage />
    </>
  );
}

export default App;
