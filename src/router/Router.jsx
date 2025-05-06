import { Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Home } from '../pages/home/Home';
import FullscreenSlideshow from '../component/HeroSection';
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother, useGSAP, ScrollTrigger);

export default function Router() {
    const location = useLocation();

    useEffect(() => {
        // Clean up GSAP instances on route change
        const cleanup = () => {
            if (ScrollSmoother.get()) {
                ScrollSmoother.get().kill();
            }
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
            gsap.killTweensOf("*");
        };

        // Clean up before initializing new instances
        cleanup();

        // Create ScrollSmoother with a small delay to ensure DOM is ready
        const timer = setTimeout(() => {
            try {
                ScrollSmoother.create({
                    smooth: 1,
                    effects: true,
                });
            } catch (error) {
                console.error("Error initializing ScrollSmoother:", error);
            }
        }, 200);

        return () => {
            clearTimeout(timer);
            cleanup();
        };
    }, [location.pathname]); // Re-run when the path changes

    return (
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <Routes>
                    <Route index element={<FullscreenSlideshow />} />
                    <Route path="home" element={<Home />} />
                    {/* Add a catch-all route that redirects to home */}
                    <Route path="*" element={<FullscreenSlideshow />} />
                </Routes>
            </div>
        </div>
    );
}
