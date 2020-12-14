import { useRef, useLayoutEffect } from 'react';

const isBrowser = typeof window !== `undefined`;

type ScrollElement = Element & { current: any };
type ScrollEffectPosition = { x: number, y: number };
export type ScrollEffectPositionState = { prevPos: ScrollEffectPosition, currPos: ScrollEffectPosition };

const getScrollPosition = ({ element, useWindow }: { element?: ScrollElement, useWindow: boolean }) => {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export const useScrollPosition = (
    effect: (positionState: ScrollEffectPositionState) => void,
    deps?: any[],
    element?: ScrollElement,
    useWindow?: boolean,
    wait?: number
): void => {
  const position = useRef(getScrollPosition({ useWindow }));

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, deps)
}