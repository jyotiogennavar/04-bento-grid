import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Data } from "./data";

// Custom hook to apply motion properties
const useBoxMotion = () => {
  return {
    whileHover: "hover",
    variants: {
      hover: { scale: 0.95 },
    },
    transition: { duration: 1, ease: "backInOut" },
  };
};

const BentoGrid = () => {
  const boxMotion = useBoxMotion(); // Apply motion properties using custom hook
  return (
    <GridContainer>
      <Box1 {...boxMotion}>
        <div>
          <h3>{Data[0].title}</h3>
          <p>{Data[0].description}</p>
        </div>

        <img src={Data[0].image} alt="Box1" />
      </Box1>
      <Box2 {...boxMotion}>
        <img src={Data[1].image} alt="Box1" />
        <div>
          <h3>{Data[1].title}</h3>
          <p>{Data[1].description}</p>
        </div>
      </Box2>

      <Box3 {...boxMotion}>
        <div>
          <h3>{Data[2].title}</h3>
          <p>{Data[2].description}</p>
        </div>
        <img src={Data[2].image} alt="Box1" />
      </Box3>
      <Box4 {...boxMotion}>
        <div>
          <h3>{Data[3].title}</h3>
          <p>{Data[3].description}</p>
        </div>
        <img src={Data[3].image} alt="Box1" />
      </Box4>
      <Box5 {...boxMotion}>
        <div>
          <h3>{Data[4].title}</h3>
          <p>{Data[4].description}</p>
        </div>
        <img src={Data[4].image} alt="Box1" />
      </Box5>
      <Box6 {...boxMotion}>
        <div>
          <h3>{Data[5].title}</h3>
          <p>{Data[5].description}</p>
        </div>
        <img src={Data[5].image} alt="Box1" />
      </Box6>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 16rem;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Change to 1 column for mobile */
  }
`;

const Box = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  padding: 1.2rem;

  div {
    z-index: 999;
  }

  h3 {
    font-family: "Patrick Hand", cursive;
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 0.9rem;
  }
  img {
    object-fit: cover;
    position: absolute;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.8rem;
    }
  }
`;

const Box1 = styled(Box)`
  grid-column: span 2;
  background-color: #ccd5ae;

  div {
    margin-left: 20rem;
  }

  img {
    height: 86%; /* 86% of the parent container */
    top: 5rem;
  }

  @media (max-width: 768px) {
    grid-column: revert;

    div {
      margin-left: 0;
    }

    img {
      height: 60%;
      top: 9rem;
      left: 7rem;
    }
  }
`;

const Box2 = styled(Box)`
  grid-row: span 2;
  background-color: #e9edc9;

  img {
    height: 50%;
    top: -1rem;
  }

  div {
    margin-top: 17rem;
  }
  @media (max-width: 768px) {
    grid-row: revert;

    div {
      margin-top: 0;
    }

    img {
      height: 60%;
      top: 9rem;
      left: 7rem;
    }
  }
`;

const Box3 = styled(Box)`
  background-color: #fefae0;

  img {
    height: 70%;
    left: 10rem;
  }

  @media (max-width: 768px) {
    img {
      height: 60%;
      top: 9rem;
      left: 7rem;
    }
  }
`;

const Box4 = styled(Box)`
  background-color: #faedcd;

  img {
    top: 8rem;
    height: 72%;
    left: 9rem;
  }

  @media (max-width: 768px) {
    img {
      height: 65%;
      top: 8rem;
      left: 8rem;
    }
  }
`;

const Box5 = styled(Box)`
  background-color: #d4a373;

  img {
    height: 70%;
    top: 7rem;
    left: 8rem;
  }
`;

const Box6 = styled(Box)`
  grid-column: span 2;
  background-color: #b7b7a4;

  img {
    height: 100%;
    left: 2rem;
    top: 5rem;
  }

  div {
    margin-left: 23rem;
  }

  @media (max-width: 768px) {
    grid-column: revert;

    div {
      margin-left: 0;
    }

    img {
      height: 70%;
      top: 9rem;
      left: 6rem;
    }
  }
`;

export default BentoGrid;
