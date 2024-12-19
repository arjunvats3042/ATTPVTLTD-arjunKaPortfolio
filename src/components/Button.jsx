import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
// import Card4 from "./Card4";

const Button = () => {
  return (
    <StyledWrapper>
      <div className="icons select-none scroll-smooth lg:pb-20">
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
      grid-column-end: 1;
      font-size: 20px; /* Smaller title font size for mobile */
      flex-wrap: wrap; /* Allow title letters to wrap if necessary */
      justify-content: center; /* Center the title letters */
      color: white;
    }
  }

  @media (max-width: 480px) {
    .title {
      grid-column-start: 1;
      grid-column-end: 1;
      font-size: 18px; /* Even smaller title font size for very small screens */
      color: white;
    }
  }
`;

export default Button;
