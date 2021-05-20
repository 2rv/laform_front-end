import { keyframes } from 'styled-components';

export const spacing = (num) => `${5 * Number(num)}px`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
`;
