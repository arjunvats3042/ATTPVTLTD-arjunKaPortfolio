import styled from "styled-components";
// import Eight from "./skills/Eight";
// import Eleven from "./skills/Eleven";
// import Five from "./skills/Five";
import Four from "./skills/Four";
// import Nine from "./skills/Nine";
import One from "./skills/One";
import Seven from "./skills/Seven";
import Six from "./skills/Six";
// import Ten from "./skills/Ten";
import Three from "./skills/Three";


const Skillsrev = () => {
  return (
    <StyledWrapper>
      <div className="logosrev pt-3">
        {/* Infinite scrolling section */}
        <div className="logos-sliderev">
          <One />
          <Three />
          <Four />
          <Six />
          <Seven />
          {/* <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven /> */}
        </div>
        {/* Duplicate for seamless animation */}
        <div className="logos-sliderev">
          <One />
          <Three />
          <Four />
          <Six />
          <Seven />
          {/* <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven /> */}
        </div>
        <div className="logos-sliderev">
          <One />
          <Three />
          <Four />
          <Six />
          <Seven />
          {/* <Five />
          <Eight />
          <Nine />
          <Ten />
          <Eleven /> */}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes sliderev {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .logosrev {
    overflow-x: hidden;
    gap: 20px;
    display: flex;
    align-items: center;
    background: black;
    position: relative;
  }

  .logos-sliderev {
    display: flex;
    animation: sliderev 15s linear infinite; /* Updated animation */
    gap: 20px;
    will-change: transform;
  }

  .logos-sliderev > * {
    margin: 0 20px; /* Space between components */
    width: 150px; /* Adjust as needed for the icons */
    height: 200px;
    flex-shrink: 0;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .logos-sliderev > * {
      width: 100px; /* Adjust for smaller screens */
      height: 200px;
      margin: 0 20px;
    }
  }

  @media (max-width: 480px) {
    .logos-sliderev > * {
      width: 80px; /* Further adjust for extra-small screens */
      height: 150px;
      margin: 0 20px;
    }
  }
`;


export default Skillsrev;
