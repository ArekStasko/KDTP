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

const marqueeRight = keyframes`
    from {
        transform: translateX(-50%);
    }

    to {
        transform: translateX(0);
    }
`;

const pulseOpacity = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }
`;

const pulseRotate = keyframes`
    0%, 100% {
        transform: scale(1) rotate(0deg);
    }

    50% {
        transform: scale(1.05) rotate(3deg);
    }
`;

const loadingDots = keyframes`
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.3;
        transform: scale(0.85);
    }
`;


export const Animations = {
  jiggle: `${jiggle} 4s ease-in-out infinite`,
  marqueeRight: `${marqueeRight} 45s linear infinite`,
  pulseOpacity: `${pulseOpacity} 2s ease-in-out infinite`,
  pulseRotate: `${pulseRotate} 2s ease-in-out infinite`,
  loadingDots: `${loadingDots} 0.8s ease-in-out infinite`,
};
