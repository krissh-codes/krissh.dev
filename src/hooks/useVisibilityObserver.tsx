import { useCallback, useEffect, useRef, useState } from 'react';

export function useVisibilityObserver(onVisible = () => {}, threshold = 0.5, observeOnce: boolean = true) {
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setVisible] = useState(false);

    const onVisibilityChange = useCallback(() => {
        setVisible(true);
        onVisible();
    }, [onVisible]);

    useEffect(() => {
        const element = ref.current!;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onVisibilityChange();
                    if (observeOnce) observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(element);

        const rect = element.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top >= 0 && rect.top <= viewHeight) {
            onVisibilityChange();
            if (observeOnce) observer.disconnect();
        }

        return () => observer.disconnect();
    }, [observeOnce, onVisibilityChange, onVisible, threshold]);

    return [ref, isVisible] as const;
}
