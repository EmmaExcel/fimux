import { Routes, Route, useLocation } from 'react-router';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Home } from '../pages/home/Home';
import FullscreenSlideshow from '../component/HeroSection';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollSmoother } from "gsap/ScrollSmoother"



gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
    const location = useLocation();


    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 1,
            effects: true,
        });
    }, [location]);

    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollSmoother, ScrollTrigger)

        // Create ScrollSmoother
        const smoother = ScrollSmoother.create({
            smooth: 1,
            effects: true,
        })

        return () => {
            // Clean up ScrollTrigger and ScrollSmoother when component unmounts
            smoother.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [location])

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <Routes>
                    <Route>
                        <Route index element={<FullscreenSlideshow />} />
                        <Route path="home" element={<Home />} />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}
