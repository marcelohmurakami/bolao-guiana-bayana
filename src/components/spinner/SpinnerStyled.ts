import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

export const SpinnerCircle = styled.div<{ $size: number; $color: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: ${({ $color }) => $color};

  animation: ${spin} 0.8s linear infinite;
`;