import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear} from "@fortawesome/free-solid-svg-icons"; // Import the faGear icon

const Two = () => {
  return (
    <StyledWrapper>
      <div className="gas li">
        <FontAwesomeIcon className="symbol" icon={faGear} size="2x" />{" "}
        {/* Use the faGear icon */}
        <p className="font-chakra font-bold text-xl">Github, VsCode, Postman</p>
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
      /* --- glow --- */ /* inside */ inset 0 0 var(--box-blur) var(--glow),
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

  .gas.li {
    --color: #ff2400; /* Tailwind equivalent of red-600 color */
    filter: brightness(110%);
  }

  .gas.li:hover {
    filter: brightness(120%) drop-shadow(0 0 10px var(--glow));
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .gas {
      --size: 8rem; /* Reduce size for tablets */
      padding: 0.5rem; /* Reduce padding */
    }

    .symbol {
      font-size: 3rem; /* Smaller icon size on tablets */
    }

    .font-chakra {
      font-size: 1rem; /* Smaller text on tablets */
    }

    #gasses {
      gap: 10px; /* Adjust the gap between items */
    }
  }

  @media (max-width: 480px) {
    .gas {
      --size: 6rem; /* Further reduce size on smaller screens */
    }

    .symbol {
      font-size: 2.5rem; /* Smaller icon size for very small screens */
    }

    .font-chakra {
      font-size: 0.875rem; /* Adjust text size */
    }
  }
`;

export default Two;
