import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
import image11 from "../assets/fimux/image-11.jpg"
import image12 from "../assets/fimux/image-12.jpg"
import image13 from "../assets/fimux/image-13.jpg"
import image15 from "../assets/fimux/image-15.jpg"
import food1 from "../assets/fimux/food-1.jpg"
import food2 from "../assets/fimux/food-2.jpg"
import { useNavigate } from 'react-router-dom';
import video1 from "../assets/fimux/video-1.mp4"



gsap.registerPlugin(Observer);

const FullscreenSlideshow = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const slidesRef = useRef([]);
  const imagesRef = useRef([]);
  const slideImagesRef = useRef([]);
  const outerWrappersRef = useRef([]);
  const innerWrappersRef = useRef([]);
  const backgroundVideosRef = useRef([]);
  const countRef = useRef(null);

  const slideData = [
    {
      heading: "FIMUX",
      bgColor: "black",
      slideImage: image12,
      overlayImage: image11,
      isOverlayVideo: false
    },
    {
      heading: "PLACE",
      bgColor: " #3A3F2D",
      slideImage: image13,
      overlayImage: image15,
      isOverlayVideo: false
    },
    {
      heading: "IS",
      bgColor: "#6b3b45",
      slideImage: food1,
      overlayImage: food2,
      isOverlayVideo: false
    },
    {
      heading: "REOPENING",
      bgColor: null,
      backgroundVideo: video1,
      hasVideoBackground: true,
      slideImage: null,
      overlayImage: null,
      isOverlayVideo: false
    }
  ];
  const wrap = (index) => {
    if (index < 0) return slideData.length - 1;
    if (index >= slideData.length) return 0;
    return index;
  };

  const gotoSection = (index, direction) => {
    if (animating || !initialized) return;


    if (currentIndex === slideData.length - 1 && direction === 1) {
      // Navigate to another route
      navigate('/home');
      return; // Exit the function early
    }

    setAnimating(true);
    const wrappedIndex = wrap(index);

    if (slideData[currentIndex].hasVideoBackground) {
      const currentBgVideo = backgroundVideosRef.current[currentIndex];
      if (currentBgVideo && currentBgVideo.pause) currentBgVideo.pause();
    }

    if (slideData[wrappedIndex].hasVideoBackground) {
      const nextBgVideo = backgroundVideosRef.current[wrappedIndex];
      if (nextBgVideo && nextBgVideo.play) {
        nextBgVideo.currentTime = 0;
        nextBgVideo.play();
      }
    }

    // Handle overlay videos
    if (slideData[currentIndex].isOverlayVideo) {
      const currentVideo = imagesRef.current[currentIndex];
      if (currentVideo && currentVideo.pause) currentVideo.pause();
    }

    if (slideData[wrappedIndex].isOverlayVideo) {
      const nextVideo = imagesRef.current[wrappedIndex];
      if (nextVideo && nextVideo.play) {
        nextVideo.currentTime = 0;
        nextVideo.play();
      }
    }

    const currentSection = slidesRef.current[currentIndex];
    const heading = currentSection.querySelector('.slide__heading');
    const nextSection = slidesRef.current[wrappedIndex];
    const nextHeading = nextSection.querySelector('.slide__heading');

    // Make sure both slides are visible before animating
    gsap.set(slidesRef.current, { visibility: 'hidden' });
    gsap.set([currentSection, nextSection], { visibility: 'visible' });

    // Setup z-index and visibility
    gsap.set(slidesRef.current, { zIndex: 0 });
    gsap.set(imagesRef.current, { zIndex: 0, autoAlpha: 0 });
    gsap.set(currentSection, { zIndex: 1 });
    gsap.set(nextSection, { zIndex: 2 });
    gsap.set(imagesRef.current[currentIndex], { zIndex: 1, autoAlpha: 1 });
    gsap.set(imagesRef.current[wrappedIndex], { zIndex: 2, autoAlpha: 1 });

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => {
        setAnimating(false);
      }
    });

    tl.set(countRef.current, { innerText: wrappedIndex + 1 }, 0.32)
      .fromTo(
        outerWrappersRef.current[wrappedIndex],
        { xPercent: 100 * direction },
        { xPercent: 0 },
        0
      )
      .fromTo(
        innerWrappersRef.current[wrappedIndex],
        { xPercent: -100 * direction },
        { xPercent: 0 },
        0
      )
      .to(
        heading,
        {
          "--width": 800,
          xPercent: 30 * direction
        },
        0
      )
      .fromTo(
        nextHeading,
        {
          "--width": 800,
          xPercent: -30 * direction
        },
        {
          "--width": 200,
          xPercent: 0
        },
        0
      )
      .fromTo(
        imagesRef.current[wrappedIndex],
        {
          xPercent: 125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        { xPercent: 0, scaleX: 1, scaleY: 1, duration: 1 },
        0
      )
      .fromTo(
        imagesRef.current[currentIndex],
        { xPercent: 0, scaleX: 1, scaleY: 1 },
        {
          xPercent: -125 * direction,
          scaleX: 1.5,
          scaleY: 1.3
        },
        0
      )
      .fromTo(
        slideImagesRef.current[wrappedIndex],
        { scale: 2 },
        { scale: 1 },
        0
      )
      .timeScale(0.8);

    setCurrentIndex(wrappedIndex);
  };

  useEffect(() => {
    // Initialize refs
    slidesRef.current = slidesRef.current.slice(0, slideData.length);
    imagesRef.current = imagesRef.current.slice(0, slideData.length);
    slideImagesRef.current = slideImagesRef.current.slice(0, slideData.length);
    outerWrappersRef.current = outerWrappersRef.current.slice(0, slideData.length);
    innerWrappersRef.current = innerWrappersRef.current.slice(0, slideData.length);
    backgroundVideosRef.current = backgroundVideosRef.current.slice(0, slideData.length);

    // Setup only once when all refs are populated
    if (!initialized &&
      slidesRef.current.length === slideData.length &&
      outerWrappersRef.current.length === slideData.length &&
      innerWrappersRef.current.length === slideData.length &&
      imagesRef.current.length === slideData.length &&
      slideImagesRef.current.length === slideData.length) {

      // Set initial visibility
      slidesRef.current.forEach((slide, i) => {
        if (i === 0) {
          slide.style.visibility = 'visible';
        } else {
          slide.style.visibility = 'hidden';
        }
      });

      // Set initial image visibility
      imagesRef.current.forEach((img, i) => {
        if (i === 0) {
          gsap.set(img, { autoAlpha: 1, zIndex: 1 });
        } else {
          gsap.set(img, { autoAlpha: 0, zIndex: 0 });
        }
      });

      // Set initial slide positions
      outerWrappersRef.current.forEach((outer, i) => {
        if (i === 0) {
          gsap.set(outer, { xPercent: 0 });
        } else {
          gsap.set(outer, { xPercent: 100 });
        }
      });

      innerWrappersRef.current.forEach((inner, i) => {
        if (i === 0) {
          gsap.set(inner, { xPercent: 0 });
        } else {
          gsap.set(inner, { xPercent: -100 });
        }
      });

      setInitialized(true);
    }

    // Create observers for wheel and touch events
    if (initialized) {
      const observer = Observer.create({
        type: "wheel,touch,pointer",
        preventDefault: true,
        wheelSpeed: -1,
        onUp: () => {
          if (animating) return;
          gotoSection(currentIndex + 1, +1);
        },
        onDown: () => {
          if (animating) return;
          gotoSection(currentIndex - 1, -1);
        },
        tolerance: 10
      });

      // Keyboard navigation
      const handleKeyDown = (e) => {
        if ((e.code === "ArrowUp" || e.code === "ArrowLeft") && !animating) {
          gotoSection(currentIndex - 1, -1);
        }
        if (
          (e.code === "ArrowDown" ||
            e.code === "ArrowRight" ||
            e.code === "Space" ||
            e.code === "Enter") &&
          !animating
        ) {
          gotoSection(currentIndex + 1, 1);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        // Clean up
        if (initialized) {
          observer.kill();
          document.removeEventListener("keydown", handleKeyDown);
        }
      };
    }
  }, [currentIndex, animating, initialized]);

  // This effect ensures refs are populated and assigned
  useEffect(() => {
    if (
      slidesRef.current.every(ref => ref) &&
      outerWrappersRef.current.every(ref => ref) &&
      innerWrappersRef.current.every(ref => ref) &&
      imagesRef.current.every(ref => ref) &&
      slideImagesRef.current.every(ref => ref) &&
      countRef.current &&
      !initialized
    ) {
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <div className="fullscreen-slideshow">
      {slideData.map((slide, index) => (
        <section
          key={index}
          className="slide"
          ref={el => {
            if (el) slidesRef.current[index] = el;
          }}
          style={{ visibility: index === 0 ? 'visible' : 'hidden' }}
        >
          <div
            className="slide__outer"
            ref={el => {
              if (el) outerWrappersRef.current[index] = el;
            }}
          >
            <div
              className="slide__inner"
              ref={el => {
                if (el) innerWrappersRef.current[index] = el;
              }}
            >
              <div className="slide__content" style={{ backgroundColor: slide.bgColor }}>
                {slide.hasVideoBackground && (
                  <div className="slide__video-background">
                    <video
                      src={slide.backgroundVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      ref={el => {
                        if (el) backgroundVideosRef.current[index] = el;
                      }}
                    />
                  </div>
                )}
                <div className="slide__container">
                  <h2 className="slide__heading">{slide.heading}</h2>
                  {slide.slideImage && (
                    <figure className="slide__img-cont">
                      {slide.isVideo ? (
                        <video
                          className="slide__img"
                          src={slide.slideImage}
                          alt=""
                          ref={el => {
                            if (el) slideImagesRef.current[index] = el;
                          }}
                          autoPlay
                          muted
                          loop
                          playsInline
                        />
                      ) : (
                        <img
                          className="slide__img"
                          src={slide.slideImage}
                          alt=""
                          ref={el => {
                            if (el) slideImagesRef.current[index] = el;
                          }}
                        />
                      )}
                    </figure>
                  )}
                </div>

              </div>
            </div>
          </div>
        </section>
      ))}


      <section className="overlay">
        <div className="overlay__content">
          <p className="overlay__count">0<span className="count" ref={el => countRef.current = el}>1</span></p>
          <figure className="overlay__img-cont">
            {slideData.map((slide, index) => (
              slide.overlayImage ? (
                slide.isOverlayVideo ? (
                  <video
                    key={index}
                    className="image"
                    src={slide.overlayImage}
                    alt=""
                    ref={el => {
                      if (el) imagesRef.current[index] = el;
                    }}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      zIndex: index === 0 ? 1 : 0
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    key={index}
                    className="image"
                    src={slide.overlayImage}
                    alt=""
                    ref={el => {
                      if (el) imagesRef.current[index] = el;
                    }}
                    style={{
                      opacity: index === 0 ? 1 : 0,
                      zIndex: index === 0 ? 1 : 0
                    }}
                  />
                )
              ) : (
                // Add an empty div as a placeholder to maintain the ref array structure
                <div
                  key={index}
                  ref={el => {
                    if (el) imagesRef.current[index] = el;
                  }}
                  style={{ display: 'none' }}
                />
              )
            ))}
          </figure>

        </div>
      </section>





      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Sora&display=swap");

        * {
          box-sizing: border-box;
          user-select: none;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        figure {
          margin: 0;
          overflow: hidden;
        }

        html,
        body {
          overflow: hidden;
          margin: 0;
          padding: 0;
          height: 100vh;
          height: -webkit-fill-available;
        }

        .fullscreen-slideshow {
          color: #fff;
          background: #4361ee;
          font-family: "Sora", sans-serif;
          height: 100vh;
          width: 100vw;
          position: relative;
          overflow: hidden;
        }

     

        a {
          color: #fff;
          text-decoration: none;
        }

        .slide {
          height: 100%;
          width: 100%;
          top: 0;
          position: fixed;
          visibility: hidden;
        }

        .slide__outer,
        .slide__inner {
          width: 100%;
          height: 100%;
          overflow-y: hidden;
        }

        .slide__content {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
        }

        .slide__container {
          position: relative;
          max-width: 1400px;
          width: 100vw;
          margin: 0 auto;
          height: 90vh;
          margin-bottom: 10vh;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(10, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          padding: 0 1rem;
        }

        .slide__heading {
          --width: 200;
          display: block;
          text-align: left;
          font-family: "Bandeins Sans & Strange Variable", sans-serif;
          font-size: clamp(5rem, 14vw, 14rem);
          font-weight: 900;
          font-variation-settings: "wdth" var(--width);
          margin: 0;
          padding: 0;
          color: #f2f1fc;
          z-index: 999;
          mix-blend-mode: difference;
          grid-area: 2 / 2 / 3 / 10;
          align-self: end;
        }

        .slide__img-cont {
          margin-top: 4rem;
          grid-area: 2 / 1 / 7 / 8;
        }

        .slide__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .overlay {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
        }

        .overlay__content {
          max-width: 1400px;
          width: 100vw;
          margin: 0 auto;
          padding: 0 1rem;
          height: 90vh;
          margin-bottom: 10vh;
          display: grid;
          grid-template-columns: repeat(10, 1fr);
          grid-template-rows: repeat(10, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }

        .overlay__img-cont {
          position: relative;
          overflow: hidden;
          margin: 0;
          grid-area: 4 / 3 / 9 / 11;
        }

        .overlay__img-cont img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }

      .overlay__img-cont video {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}

.slide__video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
}

.slide__video-background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide__container {
  position: relative;
  z-index: 1;
}


        .overlay__count {
          grid-area: 3 / 10 / 4 / 10;
          font-size:0px;
          margin: 0;
          padding: 0;
          text-align: right;
          // border-bottom: 7px white solid;
        }

        @media screen and (min-width: 900px) {
          .overlay__content,
          .slide__container {
            padding: 0 3rem;
            margin-top: 10vh;
            height: 80vh;
          }
          .overlay__img-cont {
            grid-area: 5 / 4 / 10 / 11;
          }
          .overlay__count {
            grid-area: 3 / 10 / 4 / 11;
          }
          .slide__img-cont {
            margin-top: 0;
            grid-area: 3 / 2 / 8 / 7;
          }
          .slide__heading {
            grid-area: 1 / 1 / 4 / 10;
          }
        }

        @font-face {
          font-family: "Bandeins Sans & Strange Variable";
          src: url("https://res.cloudinary.com/dldmpwpcp/raw/upload/v1566406079/BandeinsStrangeVariable_esetvq.ttf");
        }
      `}</style>
    </div>
  );
};

export default FullscreenSlideshow;