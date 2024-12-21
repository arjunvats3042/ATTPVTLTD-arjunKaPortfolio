import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
// import Card4 from "./Card4";

const Button = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  // Intersection Observer for triggering animations when the cards come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === containerRef.current) {
          if (entry.isIntersecting) {
            setVisible(true); // Trigger animation when in view
          } else {
            setVisible(false); // Reset when out of view
          }
        }
      });
    });

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <StyledWrapper>
      <div
        className={`pt-20 icons select-none scroll-smooth lg:pb-20 ${
          visible ? "visible" : "hidden"
        }`}
        ref={containerRef}
      >
        <div className="title">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>J</span>
          <span>E</span>
          <span>C</span>
          <span>T</span>
          <span>S</span>
        </div>

        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns on larger screens */
    place-content: center;
    gap: 70px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
  }

  .icons.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .title {
    grid-column-start: 1;
    grid-column-end: 4;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding-bottom: 30px;
  }

  .title span {
    text-shadow: 1px 1px #ffffff;
  }

  /* Animation for individual cards */
  .icons > div {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
  }

  .icons.visible > div {
    opacity: 1;
    transform: translateY(0);
  }

  /* Responsive Styles */
  @media (max-width: 900px) {
    .icons {
      grid-template-columns: 1fr; /* Stacks the cards on smaller screens */
      gap: 40px;
    }

    .title {
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 22px; /* Smaller title font size for mobile */

      // justify-content: center;
      color: white;
    }
  }

  @media (max-width: 480px) {
    .title {
      grid-column-start: 1;
      grid-column-end: 1;
      font-size: 20px; /* Smaller title for small screens */
    }
  }
`;

export default Button;
