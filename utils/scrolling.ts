// Easing function for a smooth transition (ease-in-out quadratic)
const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

/**
 * Smoothly scrolls the window to a target vertical position.
 * @param {number} targetPosition - The vertical pixel position to scroll to.
 * @param {number} duration - The duration of the scroll animation in milliseconds.
 */
export const smoothScrollTo = (targetPosition: number, duration: number): void => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
