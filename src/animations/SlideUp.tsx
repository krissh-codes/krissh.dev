import Reveal, { RevealProps } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

export function SlideUp({ distance, children, ...rest }: SlideUpProps) {
    const customAnimation = keyframes`
    from {
      opacity: 0;
      transform: translateY(${distance ?? '4rem'});
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

    return (
        <Reveal keyframes={customAnimation} triggerOnce {...rest}>
            {children}
        </Reveal>
    );
}

interface SlideUpProps extends RevealProps {
    distance?: string;
}
