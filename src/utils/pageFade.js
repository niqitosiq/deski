import { sineOut } from 'svelte/easing';

let duration = 250;
let delay = duration;

let delayZero = 0;

export const fadeIn = () => ({
  duration,
  delay,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});
export const fadeOut = () => ({
  duration,
  delay: delayZero,
  easing: sineOut,
  css: (t) => `opacity: ${t}`,
});
