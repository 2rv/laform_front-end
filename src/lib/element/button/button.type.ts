import { HTMLAttributes } from 'react';

export interface ButtonPropsType extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  tid?: string;
  tvalue?: object;
  disabled?: boolean;
}
