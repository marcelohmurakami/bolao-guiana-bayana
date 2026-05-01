import { SpinnerWrapper, SpinnerCircle } from "./SpinnerStyled";

type SpinnerProps = {
  size?: number;
  color?: string;
};

export function Spinner({ size = 40, color = "#32d96b" }: SpinnerProps) {
  return (
    <SpinnerWrapper>
      <SpinnerCircle $size={size} $color={color} />
    </SpinnerWrapper>
  );
}