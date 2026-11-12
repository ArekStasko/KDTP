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

const scorePopUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(45px) scale(0.8);
  }

  60% {
    opacity: 1;
    transform: translateY(-8px) scale(1.04);
  }

  80% {
    transform: translateY(3px) scale(0.98);
  }

  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const cartoonSlideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-180px) scale(0.85) rotate(-5deg);
  }

  60% {
    opacity: 1;
    transform: translateX(18px) scale(1.04) rotate(2deg);
  }

  80% {
    transform: translateX(-7px) scale(0.98) rotate(-1deg);
  }

  100% {
    opacity: 1;
    transform: translateX(0) scale(1) rotate(0deg);
  }
`;

const cartoonSlideOut = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0) scale(1) rotate(0deg);
  }

  25% {
    opacity: 1;
    transform: translateX(15px) scale(1.03) rotate(2deg);
  }

  100% {
    opacity: 0;
    transform: translateX(-180px) scale(0.85) rotate(-5deg);
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
  scorePopUp: `${scorePopUp} 0.6s both`,
  cartoonSlideIn: `${cartoonSlideIn} 0.7s both`,
  cartoonSlideOut: `${cartoonSlideOut} 0.5s both`,
};
