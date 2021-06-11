import { keyframes } from 'styled-components';

export const spacing = (num) => `${5 * Number(num)}px`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
`;

export function hexToRgb(hex, stringify = true) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  const rgb = [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];

  return stringify ? rgb.join(',') : rgb;
}
