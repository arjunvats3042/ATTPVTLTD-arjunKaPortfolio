import React from "react";
import styled from "styled-components";
// import One from "./skills/One";
// import Three from "./skills/Three";
// import Four from "./skills/Four";
import Five from "./skills/Five";
// import Six from "./skills/Six";
// import Seven from "./skills/Seven";
import Eight from "./skills/Eight";
import Nine from "./skills/Nine";
import Ten from "./skills/Ten";
import Eleven from "./skills/Eleven";

const Skills = () => {
  return (
    <StyledWrapper>
      <div className="logos">
        {/* Infinite scrolling section */}
        <div className="logos-slide">
          {/* <One />
          <Three />
          <Four />
          <Six />
          <Seven /> */}
          <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven />
        </div>
        {/* Duplicate for seamless animation */}
        <div className="logos-slide">
          {/* <One />
          <Three />
          <Four />
          <Six />
          <Seven /> */}
          <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven />
        </div>
        <div className="logos-slide">
          {/* <One />
          <Three />
          <Four />
          <Six />
          <Seven /> */}
          <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    overflow-x: hidden;
    gap: 20px;
    display: flex;
    align-items: center;
    background: black;
    position: relative;
  }

  .logos-slide {
    display: flex;
    animation: slide 15s linear infinite;
    gap: 20px;
    will-change: transform;
  }

  .logos-slide > * {
    margin: 0 20px; /* Space between components */
    width: 150px; /* Adjust as needed for the icons */
    height: 200px;
    flex-shrink: 0;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .logos-slide > * {
      width: 100px; /* Adjust for smaller screens */
      height: 200px;
      margin: 0 20px;
    }
  }

  @media (max-width: 480px) {
    .logos-slide > * {
      width: 80px; /* Further adjust for extra-small screens */
      height: 150px;
      margin: 0 20px;
    }
  }
`;


export default Skills;
