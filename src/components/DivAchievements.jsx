import React from 'react'
import styled from 'styled-components';

import Achievement1 from './Achievement1';
import Achievement2 from './Achievement2';
import Achievement3 from './Achievement3';
import Achievement4 from './Achievement4';
// import Achievement5 from './Achievement5';

const DivAchievements = () => {
  return (
    <StyledWrapper>
      <div className="icons select-none lg:pb-20 scroll-smooth">
        <div className="title">
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

        <Achievement1 />
        <Achievement2 />
        <Achievement3 />
        <Achievement4 />
        {/* <Achievement5/> */}
      </div>
    </StyledWrapper>
  );
}
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
    color: white;
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
      grid-column-end: 3;
      font-size: 20px; /* Smaller title font size for mobile */
      flex-wrap: wrap; /* Allow title letters to wrap if necessary */
      justify-content: center; /* Center the title letters */
      color: white;
    }
  }

  @media (max-width: 480px) {
    .title {
      grid-column-start: 1;
      grid-column-end: 3;
      font-size: 18px; /* Even smaller title font size for very small screens */
      color: white;
    }
  }
`;
export default DivAchievements