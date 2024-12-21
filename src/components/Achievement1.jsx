import React from "react";
import styled from "styled-components";

const Achievement1 = () => {
  return (
    <StyledWrapper>
      <div className="select-none card">
        <p className="heading">ICPC</p>
        <p>
          Qualified for ICPC Regionals 2024 achieving Rank 341 in RL1 and Rank
          708 in RL2 in the Amritapuri Region.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding: 12px;
    gap: 12px;
    border-radius: 8px;
    color: white;
    z-index: 1; /* Ensure the card is on top */
  }

  .card::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(
      -45deg,
      #66d9ff 0%,
      #0072ff 100%
    ); /* Lighter blue gradient */
    z-index: -1; /* Behind the card */
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card::after {
    content: "";
    z-index: -2; /* Further behind */
    position: absolute;
    inset: 0;
    background: linear-gradient(
      -45deg,
      #66d9ff 0%,
      #0072ff 100%
    ); /* Lighter blue gradient */
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(60px);
  }

  .heading {
    font-size: 27px;
    text-transform: capitalize;
    font-weight: 700;
  }

  .card p:not(.heading) {
    font-size: 14px;
    font-family: "Chakra Petch", sans-serif;
  }

  .card p:last-child {
    color: white; /* Matching lighter blue text color */
    font-weight: 400;
  }

  .card:hover::after {
    filter: blur(150px); /* Increases blur on hover */
  }

  .card:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77); /* Adds a rotation effect */
  }
`;

export default Achievement1;
