import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDatabase} from "@fortawesome/free-solid-svg-icons"; // Import the faDatabase icon

const Nine = () => {
  return (
    <StyledWrapper>
      <div className="gas kr">
        <FontAwesomeIcon className="symbol" icon={faDatabase} size="2x" />
        {/* Use the faDatabase icon */}
        <p className="font-chakra font-bold text-xl">SQL</p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #gasses {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .gas {
    --blur: 1.75rem;
    --box-blur: calc(0.5 * var(--blur));
    --glow: var(--color);
    --size: 12rem;

    align-items: center;
    border-radius: 12px;
    border: 4px solid currentColor;
    box-shadow: 
      /* --- "glass" tube --- */
      /* inside */ inset 0 0 0
        2px rgba(0, 0, 0, 0.15),
      /* outside */ 0 0 0 2px rgba(0, 0, 0, 0.15),
      /* --- glow --- */ inset 0 0 var(--box-blur) var(--glow),
      /* outside */ 0 0 var(--box-blur) var(--glow);
    color: var(--color, white);
    display: inline-flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    height: var(--size);
    justify-content: space-around;
    padding: 1rem;
    width: var(--size);
  }

  .symbol {
    font-size: 4rem;
    font-family: "Neon Glow";
    text-shadow: 0 0 var(--blur) var(--glow);
  }

  .gas.kr {
    --color: #0066cc; /* Color for SQL */
    filter: saturate(200%);
  }

  .gas.kr:hover {
    filter: brightness(120%) drop-shadow(0 0 10px var(--glow));
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .gas {
      --size: 8rem; /* Decrease size for smaller screens */
      padding: 0.5rem; /* Reduce padding */
    }

    .symbol {
      font-size: 2rem; /* Smaller icon size on mobile */
    }

    .font-chakra {
      font-size: 1rem; /* Smaller text on mobile */
    }

    #gasses {
      gap: 10px; /* Reduce the gap between items on mobile */
    }
  }

  @media (max-width: 480px) {
    .gas {
      --size: 6rem; /* Further reduce size for very small screens */
    }

    .symbol {
      font-size: 1.5rem; /* Smaller icon size */
    }

    .font-chakra {
      font-size: 0.8rem; /* Adjust text size on very small devices */
    }
  }
`;

export default Nine;
