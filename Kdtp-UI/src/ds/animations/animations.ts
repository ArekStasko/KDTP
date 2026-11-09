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

const blobFloat = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  25% {
    transform: translate3d(12px, -18px, 0) rotate(5deg);
  }

  50% {
    transform: translate3d(-8px, 12px, 0) rotate(-4deg);
  }

  75% {
    transform: translate3d(15px, 8px, 0) rotate(3deg);
  }
`;

const blobMorph = keyframes`
  0%, 100% {
    border-radius: 60% 40% 65% 35% / 45% 55% 40% 60%;
  }

  25% {
    border-radius: 45% 55% 40% 60% / 60% 35% 65% 40%;
  }

  50% {
    border-radius: 35% 65% 55% 45% / 40% 60% 35% 65%;
  }

  75% {
    border-radius: 55% 45% 35% 65% / 65% 40% 60% 35%;
  }
`;

const logoPulseRotate = keyframes`
  0%, 100% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.05) rotate(-3deg);
  }
`;

export const Animations = {
  jiggle: `${jiggle} 4s ease-in-out infinite`,
  marqueeRight: `${marqueeRight} 45s linear infinite`,
  pulseOpacity: `${pulseOpacity} 2s ease-in-out infinite`,
  pulseRotate: `${pulseRotate} 2s ease-in-out infinite`,
  loadingDots: `${loadingDots} 0.8s ease-in-out infinite`,
  blobFloat: `${blobFloat} 12s ease-in-out infinite`,
  blobMorph: `${blobMorph} 16s ease-in-out infinite`,
  logoPulseRotate: `${logoPulseRotate} 3s ease-in-out infinite`,
};
