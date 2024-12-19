import React from "react";
import styled from "styled-components";

const Achievement1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <span className="text">ICPC</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .text {
    color: #87ceeb; /* Light Blue color for text */
    text-shadow: -1px -1px 2px black, 1px -1px 2px black, -1px 1px 2px black,
      1px 1px 2px black;
    font-size: 40px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .card {
    position: relative;
    width: 280px;
    height: 230px;
    background: linear-gradient(
      135deg,
      rgb(0, 214, 255) 0%,
      /* Light Blue */ rgb(8, 96, 226) 100% /* Dark Blue */
    );
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-weight: bold;
    border-radius: 15px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2), 0 3px 10px rgba(0, 0, 0, 0.1); /* Shadow for depth */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05); /* Slightly enlarge on hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 5px 15px rgba(0, 0, 0, 0.2); /* Stronger shadow on hover */
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 94%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: bold;
    background-color: #87ceeb; /* Light Blue background */
    transition: all 0.5s;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2); /* Inner shadow for depth */
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover:after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .card:hover:after {
    color: black;
    content: "Qualified for ICPC Regionals 2024 achieving Rank 341 in RL1 and Rank 708 in RL2 in the Amritapuri Region.";
    font-size: 15px;
    font-weight: medium;
    font-family: "Chakra Petch", sans-serif;
    padding: 10px;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .card {
      width: 220px;
      height: 200px;
      font-size: 30px; /* Adjust font size for tablet */
    }

    .text {
      font-size: 30px; /* Adjust text size for tablet */
    }

    .card:hover::after {
      font-size: 13px; /* Slightly smaller text on tablet */
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 160px;
      height: 140px;
      font-size: 20px; /* Adjust font size for mobile */
    }

    .text {
      font-size: 20px; /* Adjust text size for mobile */
    }

    .card:hover::after {
      font-size: 12px; /* Even smaller text on mobile */
    }
  }
`;

export default Achievement1;
