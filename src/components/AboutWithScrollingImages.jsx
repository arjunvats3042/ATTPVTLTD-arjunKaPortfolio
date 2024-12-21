import React, {useState, useEffect, useRef} from "react";
import styled from "styled-components";

// Import your images
import leetcode from "../assets/leetcode.png";
import codechef from "../assets/codechef.jpg";
import codeforces from "../assets/codeforces.png";
import wrap from "../assets/wrap.png";

// Import Font Awesome icons
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const AboutWithScrollingImages = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const descriptionRef = useRef(null);
  const carouselRef = useRef(null);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  // Array of imported images
  const images = [leetcode, codechef, codeforces, wrap];

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === descriptionRef.current) {
            setDescriptionVisible(entry.isIntersecting);
          }
          if (entry.target === carouselRef.current) {
            setCarouselVisible(entry.isIntersecting);
          }
        });
      },
      {threshold: 0.2}
    );

    if (descriptionRef.current) observer.observe(descriptionRef.current);
    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => {
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
      if (carouselRef.current) observer.unobserve(carouselRef.current);
    };
  }, []);

  return (
    <StyledWrapper>
      {/* Title Section - On Top */}
      <div className="title">
        <span>A</span>
        <span>B</span>
        <span>O</span>
        <span>U</span>
        <span>T</span>
      </div>

      <div className="total flex flex-row">
        {/* About Section */}
        <div
          className={`about-section ${
            descriptionVisible ? "visible" : "hidden"
          }`}
          ref={descriptionRef}
        >
          <p className="description font-inconsolata">
            Hey! I'm a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              3rd-year CSE student
            </span>{" "}
            who loves{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              tech
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              solving problems
            </span>
            . While I’m still learning, I’ve already built a few projects with
            the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              MERN stack
            </span>{" "}
            and got deep into{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              competitive programming
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold p-1 rounded-md">
              DSA
            </span>
            .{" "}
            <span className="italic">
              Tech excites me, and I’m always looking to improve my skills and
              learn something new.
            </span>{" "}
            Whether it's coding challenges or creating websites, I enjoy pushing
            myself to do more and grow as a developer.{" "}
            <span className="italic">
              I’m always excited to see where this journey takes me!
            </span>
          </p>
        </div>

        {/* Right side - Image Carousel */}
        <div
          className={`image-carousel ${carouselVisible ? "visible" : "hidden"}`}
          ref={carouselRef}
        >
          <div className="image-container">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
            />
          </div>
          <div className="controls">
            <button onClick={handlePrev}>
              <FaChevronLeft />
            </button>
            <button onClick={handleNext}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  // height: 100vh;
  padding: 20px;
  background: black;
  color: white;

  .total {
    height: 550px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .title {
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    color: white;
    // margin-bottom: 20px;
  }

  .title span {
    text-shadow: 1px 1px #ffffff;
  }

  /* About Section */
  .about-section {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 50%;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(50px) scale(0.9);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .about-section.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .description {
    font-size: 1.3rem;
    line-height: 1.6;
    color: #eaeaea;
    overflow: hidden;
  }

  .line {
    display: block;
    opacity: 0;
    transform: translateX(-50px);
    animation: fadeIn 0.5s ease forwards;
  }

  .line:nth-child(1) {
    animation-delay: 0.1s;
  }

  .line:nth-child(2) {
    animation-delay: 0.3s;
  }

  .line:nth-child(3) {
    animation-delay: 0.5s;
  }

  .line:nth-child(4) {
    animation-delay: 0.7s;
  }

  .line:nth-child(5) {
    animation-delay: 0.9s;
  }

  /* Image Carousel */
  .image-carousel {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    height: 100%;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(50px) rotate(-5deg);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }

  .image-carousel.visible {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }

  .image-container {
    width: 90%;
    height: 400px; /* Set a fixed height based on the codeforces image */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    animation: zoomIn 1.2s ease forwards;
  }

  .controls {
    position: absolute;
    bottom: 20px;
    display: flex;
    gap: 15px;
  }

  .controls button {
    padding: 10px;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    transition: transform 0.2s ease, background-color 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls button:hover {
    transform: scale(1.2);
    background: linear-gradient(-45deg, #66d9ff 0%, #0072ff 100%);
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoomIn {
    from {
      transform: scale(0.8);
    }
    to {
      transform: scale(1);
    }
  }

  /* Media Query for Tablet Screens and Smaller */
  @media (max-width: 900px) {
    .total {
      flex-direction: column; /* Stack content vertically */
      align-items: center;
    }

    .title {
      font-size: 22px;
      gap: 20px;
      margin-bottom: 15px;
    }

    .about-section,
    .image-carousel {
      max-width: 100%;
      padding: 10px;
    }

    .description {
      font-size: 1rem;
    }

    .image-container img {
      max-width: 95%; /* Slightly increase width */
      max-height: 350px; /* Increase height for better visibility */
    }
  }

  /* Media Query for Mobile Screens */
  @media (max-width: 480px) {
    .description {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .image-container img {
      max-width: 120%;
      max-height: 550px;
      object-fit: contain;
    }

    .controls button {
      font-size: 1rem;
      padding: 8px;
    }
  }
`;



export default AboutWithScrollingImages;
