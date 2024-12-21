import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

import Achievement1 from "./Achievement1";
import Achievement2 from "./Achievement2";
import Achievement3 from "./Achievement3";
import Achievement4 from "./Achievement4";

const DivAchievements = () => {
  const [achievementVisible, setAchievementVisible] = useState(false);
  const achievementRef = useRef(null);

  // Intersection Observer for triggering animations when the achievement cards come into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === achievementRef.current) {
          if (entry.isIntersecting) {
            setAchievementVisible(true); // Trigger animation when in view
          } else {
            setAchievementVisible(false); // Reset when out of view
          }
        }
      });
    }); // Removed the threshold option

    if (achievementRef.current) observer.observe(achievementRef.current);

    return () => {
      if (achievementRef.current) observer.unobserve(achievementRef.current);
    };
  }, []);

  return (
    <StyledWrapper>
      {/* Title Section - On Top (Unchanged) */}
      <div className="title select-none">
        <span>A</span>
        <span>C</span>
        <span>H</span>
        <span>I</span>
        <span>E</span>
        <span>V</span>
        <span>E</span>
        <span>M</span>
        <span>E</span>
        <span>N</span>
        <span>T</span>
        <span>S</span>
      </div>

      {/* Achievements Section */}
      <div
        className={`icons ${achievementVisible ? "visible" : "hidden"}`}
        ref={achievementRef}
      >
        <Achievement1 />
        <Achievement2 />
        <Achievement3 />
        <Achievement4 />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-content: center;
    gap: 80px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 40px;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 1s ease, transform 1s ease;
  }

  .title {
    grid-column-start: 1;
    grid-column-end: 5;
    text-align: center;
    font-size: 25px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding-bottom: 40px;
    // gap: 10px;
  }

  .title span {
    text-shadow: 1px 1px #ffffff;
  }

  .icons.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Animation for individual achievement cards */
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
      grid-template-columns: 1fr 1fr; /* 2 columns on medium screens */
      gap: 40px;
    }

    .title {
      font-size: 22px; /* Slightly smaller title for medium screens */
    }
  }

  @media (max-width: 600px) {
    .icons {
      grid-template-columns: 1fr; /* 1 column on small screens */
      gap: 30px;
    }

    .title {
      font-size: 20px; /* Smaller title for small screens */
    }
  }
`;

export default DivAchievements;
