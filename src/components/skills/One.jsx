import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons"; // Import the faCode icon

const One = () => {
  return (
    <StyledWrapper>
      <div className="gas xe">
        <FontAwesomeIcon className="symbol" icon={faCode} size="2x" />
        <p className="font-chakra font-bold text-xl">C++, Javascript</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #gasses {
    display: flex;
    justify-content: center;
    gap: 20px; /* Add spacing between items */
    flex-wrap: wrap;
    align-items: center;
  }

  .gas {
    --blur: 1.75rem;
    --box-blur: calc(0.5 * var(--blur));
    --glow: var(--color);
    --size: 10rem;
    --color: #9b59b6; /* Default color for all items */

    align-items: center;
    border-radius: 12px;
    border: 4px solid currentColor;
    box-shadow:
      /* --- "glass" tube --- */ inset 0 0 0 2px
        rgba(0, 0, 0, 0.15),
      0 0 0 2px rgba(0, 0, 0, 0.15), inset 0 0 var(--box-blur) var(--glow),
      0 0 var(--box-blur) var(--glow);
    color: var(--color, white);
    display: inline-flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    height: var(--size);
    justify-content: space-around;
    padding: 1rem;
    width: var(--size);
    text-align: center;
  }

  .symbol {
    font-size: 4rem;
    font-family: "Neon Glow";
    text-shadow: 0 0 var(--blur) var(--glow);
  }

  .gas.xe {
    --color: #9b59b6; /* Unique purple color */
    filter: brightness(105%);
  }

  .gas.xe:hover {
    filter: brightness(120%) drop-shadow(0 0 10px var(--glow));
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .gas {
      --size: 8rem; /* Decrease the size for smaller screens */
      padding: 0.5rem; /* Reduce padding for better fit */
    }

    .symbol {
      font-size: 2rem; /* Smaller icon size on mobile */
    }

    .font-chakra {
      font-size: 1rem; /* Smaller text for smaller devices */
    }

    #gasses {
      gap: 10px; /* Reduce the gap between items on mobile */
    }
  }

  @media (max-width: 480px) {
    .gas {
      --size: 6rem; /* Even smaller size for extra small screens */
    }

    .symbol {
      font-size: 1.5rem; /* Even smaller icon size on very small screens */
    }

    .font-chakra {
      font-size: 0.8rem; /* Adjust font size on very small devices */
    }
  }
`;

export default One;
