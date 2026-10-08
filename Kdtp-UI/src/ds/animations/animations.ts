import { keyframes } from "@mui/system";

const jiggle = keyframes`
  0%, 100% {
    transform: skewX(0deg) skewY(0deg);
  }

  25% {
    transform: skewX(2deg) skewY(1deg);
  }

  75% {
    transform: skewX(-2deg) skewY(-1deg);
  }
`;

export const Animations = {
    jiggle: `${jiggle} 4s ease-in-out infinite`,
};