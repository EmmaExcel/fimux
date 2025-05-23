import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import Images from '../imageshowcase/ImagesShowcase';
import ServicesSection from '../services/Services';
import DeliveryPage from '../delivery/Delivery';
export const Home = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();
    const smoothWrapperRef = useRef(null)
    const smoothContentRef = useRef(null)
    const pinRef = useRef(null)


    useEffect(() => {
        const handleScroll = (event) => {
            if (containerRef.current) {
                const scrollTop = containerRef.current.scrollTop;
                if (scrollTop === 0 && event.deltaY < 0) {
                    navigate('/');
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, [navigate]);
    // Change these lines:


    useEffect(() => {
        // Register GSAP plugins
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

        // Create ScrollSmoother instance
        const smoother = ScrollSmoother.create({
            smooth: 2,
            effects: true,
            wrapper: smoothWrapperRef.current,
            content: smoothContentRef.current,
        })

        // Animate SVG path drawing
        gsap.from(".draw", {
            drawSVG: "0%",
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".heading",
                start: "clamp(top center)",
                scrub: true,
                pin: pinRef.current,
                pinSpacing: false,
            },
        })

        // Set logo opacity
        gsap.set(".logo svg", { opacity: 1 })

        // Cleanup function
        return () => {
            smoother.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])


    return (
        <div id="smooth-wrapper" ref={smoothWrapperRef}>
            <div id="smooth-content" ref={smoothContentRef}>
                <header>
                    <div className="logo">
                        <svg viewBox="0 0 370 100.34">
                            <g xmlns="http://www.w3.org/2000/svg" fill="#111" transform="matrix(.34923 0 0 .34923 -2.282 -2.195)">
                                <defs>
                                    <path id="a" d="M7 6.5h286v287.1H7z" />
                                </defs>
                                <clipPath id="b">
                                    <use xlinkHref="#a" overflow="visible" />
                                </clipPath>
                                <g style={{ clipPath: "url(#b)" }}>
                                    <path d="M150 198.8c26.1 0 47.2 21.2 47.2 47.4s-21.1 47.4-47.2 47.4-47.2-21.2-47.2-47.4 21.1-47.4 47.2-47.4zM198.7 152.9c-.1-1.1-.1-2.2-.1-3.3.1-12.4-4.5-24.4-13.3-33.2l-2-2c-8.7-8.7-20.5-13.4-32.8-13.3h-1.4c-12.3-.2-24.1 4.6-32.8 13.3l-2 2c-8.8 8.8-13.3 20.8-13.3 33.2 0 1.1 0 2.2-.1 3.3-1.3 23.3-19.8 42.4-43.1 44.3-29.3 2.5-53.5-21.9-51.1-51.3 1.9-23.3 21-41.8 44.1-43.2 1-.1 2.2-.1 3.2-.1 12.4.1 24.3-4.5 33.1-13.3l2-2c8.8-8.8 13.3-20.8 13.3-33.2 0-1.6.1-3.3.2-4.9 2.1-22.9 20.8-41.1 43.7-42.8C174 4.5 197 26.4 197 53.6v.7c-.2 12.3 4.6 24.2 13.3 32.9l2 2c8.8 8.8 20.7 13.4 33.1 13.3 1 0 2.1 0 3.2.1 23.3 1.3 42.2 19.9 44.1 43.2 2.5 29.4-21.8 53.7-51.1 51.3-23.1-1.8-41.5-21-42.9-44.2z" />
                                </g>
                            </g>
                            {/* <path
                                fill="#111"
                                d="m154.366 61.651 6.506 5.865c-4.307 4.766-10.447 6.873-17.32 6.873C130.539 74.39 120 64.4 120 50.93s10.539-23.552 23.552-23.552c6.873 0 13.013 2.108 17.32 6.873l-6.506 5.865c-2.658-3.574-6.507-4.949-10.814-4.949-7.79 0-14.113 6.507-14.113 15.763 0 9.164 6.323 15.762 14.113 15.762 4.307 0 8.156-1.374 10.814-5.04zM180.484 3v70.473h-9.53V3h9.53zm33.083 24.285c13.013 0 18.237 7.881 18.237 14.571v31.617h-9.44v-4.949c-3.299 4.49-9.164 5.774-12.83 5.774-10.355 0-17.137-6.049-17.137-14.113 0-11.272 8.431-15.304 17.137-15.304h12.83v-3.025c0-2.84-1.1-6.781-8.797-6.781-4.307 0-8.248 2.29-10.814 5.865l-6.507-5.865c4.308-4.766 10.448-7.79 17.32-7.79zm8.797 32.075v-6.782h-11.547c-5.59 0-9.53 2.841-8.889 7.973.55 4.308 4.032 6.049 8.89 6.049 8.705 0 11.546-4.124 11.546-7.24zm61.492-12.005v26.118h-9.53l.091-.367V48.271c0-9.164-2.383-13.196-10.172-13.196-8.798 0-11.914 6.14-11.914 14.113v24.285h-9.439V28.202h9.44v7.331c1.282-4.032 6.506-7.698 11.913-8.065 8.89-.641 15.212 2.292 18.053 9.623 1.925-6.232 8.065-9.256 13.38-9.623 12.28-.916 19.612 5.04 19.612 19.887v26.118h-9.44V48.27c0-9.164-2.382-13.196-10.172-13.196-7.881 0-11.18 4.948-11.822 12.28zM370 50.929c0 13.471-9.714 23.46-22.727 23.46-4.4 0-9.99-1.833-13.013-4.307v26.76h-9.44v-68.64h9.44v3.574c3.574-2.75 8.614-4.4 13.013-4.4C360.286 27.377 370 37.458 370 50.93zm-9.53 0c0-9.256-6.324-15.763-14.114-15.763-5.132 0-9.622 2.291-12.096 7.24-1.192 2.475-1.925 5.407-1.925 8.523s.733 6.048 1.925 8.523c2.474 4.857 6.964 7.24 12.096 7.24 7.79 0 14.113-6.599 14.113-15.763z"
                            /> */}
                        </svg>
                    </div>
                    <nav>
                        <ul role="list">
                            <li className='nav-item'>
                                <a href="">
                                    About
                                </a>
                                <a href="">
                                    Menu
                                </a>
                                <a href="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>

                <section className="hero pad-l">
                    <div className="heading">
                        <div className="pin" ref={pinRef}>
                            <h1 className='big-text'>
                                <span className="clamp">
                                    Fimux
                                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.14 500">
                                        <path
                                            className="draw"
                                            d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47"
                                            fill="none"
                                            stroke="#8486aa"
                                            strokeMiterlimit="10"
                                            strokeWidth="8"
                                        />
                                    </svg>
                                </span>
                                <span className="yt">{" "}Place</span>
                            </h1>
                        </div>
                    </div>
                    <div className="images">
                        <img
                            data-speed="clamp(2.4)"
                            src="https://images.unsplash.com/photo-1530569673472-307dc017a82d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTUwMDA&ixlib=rb-4.0.3&q=80&w=400"
                            alt="Mountain landscape"
                        />
                        <img
                            data-speed="clamp(1.8)"
                            src="https://images.unsplash.com/photo-1439853949127-fa647821eba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5Njk&ixlib=rb-4.0.3&q=80&w=400"
                            alt="Ocean waves"
                        />
                        <img
                            data-speed="clamp(2.2)"
                            src="https://images.unsplash.com/photo-1551376347-075b0121a65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
                            alt="Mountain view"
                        />
                        <img
                            data-speed="clamp(1.5)"
                            src="https://images.unsplash.com/photo-1500817487388-039e623edc21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODM2NTQ5MTE&ixlib=rb-4.0.3&q=80&w=400"
                            alt="Ocean sunset"
                        />
                    </div>
                </section>

                <section className="spacer">


                </section>

                <Images />

                <ServicesSection />

                <DeliveryPage />

            </div>
        </div>
    )
};
