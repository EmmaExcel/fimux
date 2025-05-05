import './App.css'
import Router from './router/Router'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);
function App() {
  return (
    <div className='bg-black min-h-screen'>
      <Router />
    </div>
  )
}

export default App
