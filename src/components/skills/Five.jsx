import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons"; // Import the faReact icon

const Five = () => {
  return (
    <StyledWrapper>
      <div className="gas kr">
        <FontAwesomeIcon className="symbol" icon={faReact} size="2x" />
        {/* Use the faReact icon */}
        <p className="font-chakra font-bold text-xl">React</p>
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
    --size: 10rem;

    align-items: center;
    border-radius: 12px;
    border: 4px solid currentColor;
    box-shadow: 
      /* --- "glass" tube --- */
      /* inside */ inset 0 0 0
        2px rgba(0, 0, 0, 0.15),
      /* outside */ 0 0 0 2px rgba(0, 0, 0, 0.15),
      /* --- glow --- */ inset 0 0 var(--box-blur) var(--glow),
      0 0 var(--box-blur) var(--glow);
    color: var(--color, white);
    display: inline-flex;
    flex-direction: column;
    font-family: system-ui, sans-serif;
    height: var(--size);
    justify-content: space-around;
    padding: 1rem;
    width: var(--size);
  }

  .number {
    font-weight: 700;
  }

  .symbol {
    font-size: 4rem;
    font-family: "Neon Glow";
    text-shadow: 0 0 var(--blur) var(--glow);
  }

  .gas.kr {
    --color: #00ffff; /* Cyan color for React */
    filter: saturate(200%);
  }

  .gas.kr:hover {
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

export default Five;
