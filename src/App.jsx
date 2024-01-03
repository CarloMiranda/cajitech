import React, { useEffect } from 'react';
import { Index } from "./pages/Index"
import Aos from 'aos';
import 'aos/dist/aos.css'


function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    < Index />
    </>
  )
}

export default App
