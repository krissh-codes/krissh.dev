import Reveal, { RevealProps } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const defaultAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(4rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export function SlideUp({ distance, children, ...rest }: SlideUpProps) {
    const customAnimation = distance
        ? keyframes`
            from {
              opacity: 0;
              transform: translateY(${distance});
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          `
        : defaultAnimation;

    return (
        <Reveal keyframes={customAnimation} triggerOnce {...rest}>
            {children}
        </Reveal>
    );
}

interface SlideUpProps extends RevealProps {
    distance?: string;
}
