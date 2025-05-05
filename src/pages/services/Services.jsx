import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Utensils, Wine, Music, Users, Star } from "lucide-react"
import "./services.css"

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
    const sectionRef = useRef(null)
    const headingRef = useRef(null)
    const cardsRef = useRef(null)

    useEffect(() => {
        console.log("Services component mounted");

        if (!sectionRef.current || !headingRef.current || !cardsRef.current) {
            console.warn("Some refs are not available");
            return;
        }

        console.log("Cards container:", cardsRef.current);
        console.log("Number of cards:", cardsRef.current.querySelectorAll(".service-card").length);

        // Simplify animations for debugging
        const cards = cardsRef.current.querySelectorAll(".service-card")

        // Make cards visible immediately without animations for debugging
        gsap.set(cards, { opacity: 1, y: 0 });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="services-section"
            style={{
                background: "#0a0a0a",
                padding: "120px 0",
                color: "white",
                position: "relative",
                zIndex: 1 // Ensure it's not hidden
            }}
        >
            {/* Decorative elements */}
            <div className="decorative-circle circle-1"></div>
            <div className="decorative-circle circle-2"></div>
            <div className="decorative-circle circle-3"></div>

            <div className="services-container">
                <div ref={headingRef} className="services-heading">
                    <h2 className="title-main">Exquisite Experiences</h2>
                    <div className="title-decoration-wrapper">
                        <div className="title-decoration"></div>
                    </div>
                    <p className="title-sub">
                        Indulge in the finest offerings at Fimux Place, where every moment is crafted for your pleasure
                    </p>
                </div>

                <div
                    ref={cardsRef}
                    className="services-cards-grid"
                    style={{
                        minHeight: "200px"
                    }}
                >


                    <div className="service-card" style={{ background: "#121212", padding: "30px", borderRadius: "8px" }}>
                        <div className="icon-container">
                            <Utensils className="icon" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Fine Dining</h3>
                            <p className="card-description">
                                Experience culinary excellence with our chef's signature dishes, crafted from the finest seasonal
                                ingredients.
                            </p>
                        </div>
                    </div>

                    <div className="service-card" style={{ background: "#121212", padding: "30px", borderRadius: "8px" }}>
                        <div className="icon-container">
                            <Wine className="icon" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Premium Lounge</h3>
                            <p className="card-description">
                                Unwind in our sophisticated lounge with handcrafted cocktails and an extensive selection of fine wines
                                and spirits.
                            </p>
                        </div>
                    </div>

                    <div className="service-card" style={{ background: "#121212", padding: "30px", borderRadius: "8px" }}>
                        <div className="icon-container">
                            <Music className="icon" />
                        </div>
                        <div className="card-content">
                            <h3 className="card-title">Live Entertainment</h3>
                            <p className="card-description">
                                Enjoy captivating performances from talented musicians and artists in an intimate and elegant
                                atmosphere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
