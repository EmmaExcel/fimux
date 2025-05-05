import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./imageshowcase.css"
import image15 from "../../assets/fimux/image-15.jpg"
import image1 from "../../assets/fimux/image-1.jpg"
import image7 from "../../assets/fimux/image-7.jpg"
import image9 from "../../assets/fimux/image-9.jpg"
import image11 from "../../assets/fimux/image-11.jpg"
import image12 from "../../assets/fimux/image-12.jpg"

export default function Images() {
    const imagesRef = useRef(null)

    useEffect(() => {
        if (!imagesRef.current) return

        // Get all images in the grid
        const images = imagesRef.current.querySelectorAll("img")

        // Apply GSAP animations to each image
        images.forEach((img) => {
            const speed = img.getAttribute("data-speed") || "auto"

            gsap.fromTo(
                img,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: speed === "auto" ? true : Number(speed),
                    },
                },
            )
        })

        return () => {

            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <main className="images-showcase-component">
            <section className="image-grid container" ref={imagesRef}>
                <picture className="image_cont">
                    <source
                        srcSet={image15}
                        media="(min-width: 1500px)"
                    />
                    <source
                        srcSet={image15}
                        media="(min-width: 700px)"
                    />
                    <img
                        data-speed="auto"
                        src={image15}
                        alt="Mountain landscape"
                    />
                </picture>
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src={image1}
                        alt="Forest landscape"
                    />
                </div>
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src={image7}
                        alt="Desert landscape"
                    />
                </div>
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src={image11}
                        alt="Lake landscape"
                    />
                </div>
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src={image9}
                        alt="Coastal landscape"
                    />
                </div>
                <div className="image_cont">
                    <img
                        data-speed="auto"
                        src={image12}
                        alt="fimux workers"
                    />
                </div>
            </section>
            <div className="spacer"></div>
        </main>
    )
}
