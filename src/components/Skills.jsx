import React from "react";
import styled from "styled-components";
import One from "./skills/one";
// import Two from "./skills/Two";
import Three from "./skills/Three";
import Four from "./skills/Four";
import Five from "./skills/Five";
import Six from "./skills/Six";
import Seven from "./skills/Seven";
import Eight from "./skills/Eight";
import Nine from "./skills/Nine";
import Ten from "./skills/Ten";
import Eleven from "./skills/Eleven";



const Skills = () => {
  return (
    <StyledWrapper>
      <div className="icons select-none lg:pb-20 scroll-smooth">
        <div className="title">
          <span>S</span>
          <span>K</span>
          <span>I</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
        </div>

        <One />
        {/* <Two/> */}
        <Three />
        <Four />

        <Six />
        <Seven />
        <Five />
        <Eight />
        <Nine />
        <Ten />
        <Eleven />
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  .icons {
    display: grid;
    grid-template-columns: repeat(3, 3fr);
    place-content: center;
    gap: 70px;
    width: 100%;
    max-width: 1200px;
    margin: auto;
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
  }
  .title span {
    text-shadow: 1px 1px #ffffff;
  }
  /* Responsive Styles */
  @media (max-width: 1000px) {
    .icons {
      grid-template-columns: 1fr; /* Stacks the cards on smaller screens */
      gap: 40px;
    }

    .title {
      grid-column-start: 1;
      grid-column-end: 4;
      font-size: 20px; /* Smaller title font size for mobile */
      flex-wrap: wrap; /* Allow title letters to wrap if necessary */
      justify-content: center; /* Center the title letters */
      color: white;
    }
  }

  @media (max-width: 480px) {
    .title {
      grid-column-start: 1;
      grid-column-end: 4;
      font-size: 18px; /* Even smaller title font size for very small screens */
      color: white;
    }
  }
`;
export default Skills;
