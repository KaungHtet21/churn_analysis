import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%); /* Start from the right */
    opacity: 0; /* Start invisible */
  }
  to {
    transform: translateX(0); /* End at original position */
    opacity: 1; /* Fully visible */
  }
`;

const Styles = {
  CarouselWrapper: styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
  `,

  ContentOverlay: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 85vh;
    color: black;
    text-align: center;
    z-index: 998;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  `,
  OverlayHeading: styled.h1`
    font-size: 36px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: start;
    width: 400px;
    animation: ${slideIn} 0.5s ease forwards;
  `,
  OverlayDescription: styled.p`
    font-size: 18px;
    max-width: 400px;
    color: #fff;
    margin-bottom: 20px;
    text-align: start;
    animation: ${slideIn} 0.5s ease forwards;
    /* animation-delay: 0.3s; */
  `,
};

export default Styles;
